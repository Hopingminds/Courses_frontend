import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL_NSDC } from "../../Api/api"; 

const LoginNSDC = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const navigate = useNavigate();

  // Fetch CSRF token on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.head(`${BASE_URL_NSDC}/user/v1`, {
          headers: {
            "If-Match": "*",
          },
        });
        console.log("Check response", response);

        if (response.headers["x-csrf-token"]) {
          const token = response.headers["x-csrf-token"];
          localStorage.setItem("csrfToken", token);
          setCsrfToken(token);
          console.log("CSRF token fetched and stored:", token);
        } else {
          console.error("CSRF token not found in the response headers.");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("csrfToken");

    if (!token) {
      console.error("CSRF token is missing. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const loginResponse = await fetch(`${BASE_URL_NSDC}/user/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Csrf-Token": token,
        },
        body: JSON.stringify({ userName, password }),
      });

      if (loginResponse.ok) {
        const data = await loginResponse.json();
        console.log("Login successful:", data);
        navigate("/dashboard");
      } else {
        const errorData = await loginResponse.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="userName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md ${
                loading ? "bg-gray-400" : "bg-green-600"
              } text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginNSDC;
