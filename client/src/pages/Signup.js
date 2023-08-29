import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import image from "../assets/img/google-24.png";
import cancel_icon from "../assets/img/icons8-cancel-24.png";
import Modal from "../components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const pass_regex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
const user_regex = /^[a-zA-Z]{4,15}$/;
const schema = yup.object().shape({
  user_name: yup
    .string()
    .matches(user_regex, "User name must be alphabets between 4-15 characters")
    .required("Name cant be empty"),
  user_email: yup.string().email().required("Must be a valid email"),
  user_pass: yup
    .string()
    .matches(
      pass_regex,
      "Password must contain 1 uppercase letter,1 lowercase letter,1 number and 1 special character between 8-15 characters"
    )
    .required("Password is required"),
  confirm_pass: yup
    .string()
    .required("Please confirm your password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.user_pass === value;
    }),
});
const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmitHandler = async (data) => {
    // console.log({ data });
    reset();
    console.log({ data });
    try {
      const res = await axios.post("http://localhost:3001/api/signup", data);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 403) {
        setError("User with email or username already exists");
        setShowModal(true);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
      {showModal === true && <Modal msg={error} onClose={closeModal} />}
      
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col w-9/12 sm:w-96 justify-items-start space-y-6 p-12 border-2 rounded"
      >
        <h2 className="text-xl font-bold">Sign Up</h2>
        <p className="text-sm !mt-1">
          Enter details to create account on blogSimple
        </p>
        <input
          className="border rounded pl-2"
          placeholder="Enter your username"
          type="text"
          maxLength={12}
          {...register("user_name")}
          required
        />

        {errors.user_name?.message && (
          <p>
            <img src={cancel_icon} className="inline" alt="alert-icon" />{" "}
            {errors.user_name.message}
          </p>
        )}

        <input
          className="border rounded pl-2"
          placeholder="Enter your email"
          type="email"
          {...register("user_email")}
          required
        />

        {errors.user_email?.message && (
          <p>
            <img src={cancel_icon} className="inline" alt="alert-icon" />{" "}
            {errors.user_email.message}
          </p>
        )}
        <input
          className="border rounded pl-2"
          placeholder="Enter your password"
          type="password"
          maxLength="12"
          {...register("user_pass")}
        />

        {errors.user_pass?.message && (
          <p>
            <img src={cancel_icon} className="inline" alt="alert-icon" />{" "}
            {errors.user_pass.message}
          </p>
        )}
        <input
          className="border rounded pl-2"
          placeholder="Confirm your password"
          type="password"
          maxLength="12"
          {...register("confirm_pass")}
        />

        {errors.confirm_pass?.message && (
          <p>
            <img src={cancel_icon} className="inline" alt="alert-icon" />{" "}
            {errors.confirm_pass.message}
          </p>
        )}
        <button className="border rounded px-2 py-1 " type="submit">
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

export default Signup;
