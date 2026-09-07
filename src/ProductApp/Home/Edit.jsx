import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    user: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      // token = user-5-1723456789
      const parts = token.split("-");

      const userId = parts[1];

      if (!userId) {
        navigate("/login");
        return;
      }

      const response = await axios.get(
        `http://localhost:8000/user/${userId}`
      );

      setUser({
        user: response.data.user,
        email: response.data.email,
        password: response.data.password,
      });

    } catch (err) {
      console.log(err);
      setError("Unable to load user details");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const userId = token.split("-")[1];

      await axios.patch(
        `http://localhost:8000/user/${userId}`,
        user
      );

      setMessage("Profile updated successfully!");
      navigate("/")

    } catch (err) {
      console.log(err);
      setError("Unable to update profile");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-12">

      <div className="mx-auto max-w-xl">

        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Edit Profile
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Update your account information
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            {/* Username */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="user"
                value={user.user}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Password */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}

            {message && (
              <p className="rounded-lg bg-green-50 p-3 text-center text-sm font-semibold text-green-600">
                {message}
              </p>
            )}

            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-center text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            {/* Buttons */}

            <div className="mt-3 flex gap-3">

              <button
                type="submit"
                className="flex-1 rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 rounded-lg border border-gray-300 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Edit;