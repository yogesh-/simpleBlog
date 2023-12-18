import axios from "axios";
import image from "../assets/img/google-24.png";
import { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ user_name: "", user_pass: "" });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const formReset = () => {
    setFormData({ user_name: "", user_pass: "" });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    formReset();
    if (formData.user_name === "" || formData.user_pass === "") {
      setError("Username and password field cant be blank");
      setShowModal(true);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/login",
          formData
        );
        if (res.status === 200) {
          // console.log(res.data.accessToken);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("user_name", res.data.user_name);
          navigate("/home");
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("User Not Found");
          setShowModal(true);
        } else if (error.response && error.response.status === 401) {
          setShowModal(true);
          setError("Wrong Password");
        }
      }
    }
  };
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      {showModal === true && <Modal msg={error} onClose={closeModal} />}
      <form className="flex flex-col w-9/12 sm:w-96 justify-items-start space-y-6 p-12 border-2 rounded">
        <h2 className="text-xl font-bold">Welcome back</h2>
        <p className="text-sm !mt-1">Please enter your details.</p>
        <input
          className="border rounded pl-2"
          placeholder="Enter your username"
          type="email"
          maxLength="15"
          name="user_name"
          value={formData.user_name}
          onChange={handleForm}
        />
        <input
          className="border rounded pl-2"
          placeholder="Enter Password"
          type="password"
          maxLength="12"
          name="user_pass"
          value={formData.user_pass}
          onChange={handleForm}
        />
        <button
          className="border rounded px-2 py-1 "
          onClick={(e) => signInHandler(e)}
        >
          Sign In
        </button>
        <button className="border rounded px-2 py-1 ">
          <span className="flex items-center justify-around">
            <img src={image} alt="google-login" />
            Login with Google
          </span>
        </button>
        <p className="text-xs">
          Don't have an account ?{" "}
          <a
            href="/signup"
            className="font-semibold hover:cursor-pointer underline"
          >
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
