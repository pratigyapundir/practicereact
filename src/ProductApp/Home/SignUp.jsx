import React, { useState } from "react";
import axios from "axios";
import bg from "../IMGAE/images1.jpg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navi=useNavigate()
  const [info, setInfo] = useState({
    id: Date.now(),
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (info.password !== info.confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setError("");


    try {
      const resp = await axios.post(
        "http://localhost:8000/user",
        info
      );

      console.log("User added:", resp.data);

      alert("Signup successful!");

      setInfo({
        id: Date.now(),
        user: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navi('/login')
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat px-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm"
      >
        <h1 className="text-center text-3xl font-bold">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter Username"
          name="user"
          value={info.user}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={info.email}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={info.password}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="password"
          placeholder="Enter Confirm Password"
          name="confirmPassword"
          value={info.confirmPassword}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none focus:ring-2 focus:ring-blue-600"
        />

        {error && (
          <p className="text-sm font-semibold text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-blue-900 px-10 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Sign Up
        </button>
        
         <div className="text-center text-sm text-gray-500">
          Already have an account?

          <button
            type="button"
            onClick={() => navi("/login")}
            className="ml-2 font-semibold text-blue-700 hover:text-blue-900 hover:underline"
          >
            Login
          </button>
          </div>
      </form>
    </div>
  );
};

export default SignUp;