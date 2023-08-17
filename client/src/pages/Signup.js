import axios from "axios";
import image from "../assets/img/google-24.png";
import { useState } from "react";
import Modal from "../components/Modal";
const Login = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_pass: "",
  });
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
    setFormData({
      user_name: "",
      user_email: "",
      user_pass: "",
    });
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    formReset();
    console.log("inside blogsimp");
    if (
      formData.user_name === "" ||
      formData.user_email === "" ||
      formData.user_pass === ""
    ) {
      alert("Username and password field cant be blank");
      setError("Fill all the fields");
      setShowModal(true);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/signup",
          formData
        );
        if (res.status === 200) {
          console.log(res.data.accessToken);
          localStorage.setItem("token", res.data.accessToken);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("User Not Found");
          //   setShowModal(true);
        } else if (error.response && error.response.status === 401) {
          //   setShowModal(true);
          setError("Wrong Password");
        }
      }
    }
  };
  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      {showModal === true && <Modal msg={error} onClose={closeModal} />}
      <form className="flex flex-col w-9/12 sm:w-96 justify-items-start space-y-6 p-12 border-2 rounded">
        <h2 className="text-xl font-bold">Sign Up</h2>
        <p className="text-sm !mt-1">
          Enter details to create account on blogSimple
        </p>
        <input
          className="border rounded pl-2"
          placeholder="Enter your username"
          type="text"
          maxLength="10"
          name="user_name"
          value={formData.user_name}
          onChange={handleForm}
        />
        <input
          className="border rounded pl-2"
          placeholder="Enter your email"
          type="text"
          maxLength="10"
          name="user_email"
          value={formData.user_email}
          onChange={handleForm}
        />
        <input
          className="border rounded pl-2"
          placeholder="Enter your password"
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
          Sign Up
        </button>
        <button className="border rounded px-2 py-1 ">
          <span className="flex items-center justify-center">
            <img className="pr-2" src={image} alt="google-login" />
            Signup with Google
          </span>
        </button>
        <p className="text-xs">
          Already have an account ? <span>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
