import React, { useState } from "react";
import axios from "axios";
import bg from "../IMGAE/images1.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const resp = await axios.get("http://localhost:8000/user");

      const users = resp.data;

      // Check email and password
      const user = users.find(
        (item) =>
          item.email === info.email &&
          item.password === info.password
      );

      // User not found
      if (!user) {
        setError("User not found. Please create an account.");

        setTimeout(() => {
          navi("/signup");
        }, 1500);

        return;
      }

      // Create token
      const token = `user-${user.id}-${Date.now()}`;

      // Store ONLY token
      localStorage.setItem("token", token);

      setSuccess(`Welcome back!`);

      // Clear form
      setInfo({
        email: "",
        password: "",
      });

      // Navigate after login
      setTimeout(() => {
        navi("/");
      }, 1000);

    } catch (error) {
      console.log(error);
      setError("Unable to connect to the server");
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

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={info.email}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none ring-1 ring-gray-200 transition focus:ring-2 focus:ring-blue-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={info.password}
          onChange={handleChange}
          required
          className="rounded-lg bg-zinc-50 p-3 outline-none ring-1 ring-gray-200 transition focus:ring-2 focus:ring-blue-600"
        />

        {/* Error */}
        {error && (
          <p className="rounded-lg bg-red-50 p-3 text-center text-sm font-semibold text-red-500">
            {error}
          </p>
        )}

        {/* Success */}
        {success && (
          <p className="rounded-lg bg-green-50 p-3 text-center text-sm font-semibold text-green-600">
            {success}
          </p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="rounded-lg bg-blue-900 px-10 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Login
        </button>

        {/* Signup Option */}
        <div className="text-center text-sm text-gray-500">
          Don't have an account?

          <button
            type="button"
            onClick={() => navi("/signup")}
            className="ml-2 font-semibold text-blue-700 hover:text-blue-900 hover:underline"
          >
            Sign Up
          </button>
        </div>

      </form>
    </div>
  );
};

export default Login;