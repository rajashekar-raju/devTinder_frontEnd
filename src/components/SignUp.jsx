import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:4000/signup", {
        firstName,
        lastName,
        email,
        password,
      },{withCredentials: true});
      navigate("/login"); // Redirect to login page after successful signup
    } catch (e) {
      console.error("Error signing up:", e);
      setError(e.response.data || "Signup failed");
    }
  };

  return (
    <div className="text-white bg-base-300 w-1/3 mx-auto p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-center text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lg">First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Enter your first name"
            className="rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lg">Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter your last name"
            className="rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lg">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lg">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}

        <div className="flex justify-center">
          <button
            onClick={handleSignUp}
            className="bg-green-700 rounded-lg px-6 py-2 text-white font-bold hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <Link to="/login" className="text-blue-400 hover:underline">
          Already have an account? Login here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
