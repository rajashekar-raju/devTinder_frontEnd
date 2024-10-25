import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("manoj1998@gmail.com");
  const [password, setPassword] = useState("Manoj@1998");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await axios.post("http://localhost:4000/login", {
          email,
          password
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(result.data));
      navigate("/profile");
    } catch (e) {
      console.error('Error logging in:', e);
      setError(e.response.data || "Invalid credentials");
    }
  };

  return (
    <div className='text-white bg-base-300 w-1/3 mx-auto p-6 rounded-lg shadow-lg mt-10'>
      <h2 className='text-center text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex flex-col gap-2 my-3'>
          <label className='text-lg'>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Enter your email'
            className='rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
          />
        </div>
        <div className='flex flex-col gap-2 my-3'>
          <label className='text-lg'>Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Enter your password'
            className='rounded-lg px-4 py-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-500'
          />
        </div>
        {error && <div className='text-red-500 text-center mb-2'>{error}</div>}
        
        <div className='flex justify-center'>
          <button 
            onClick={handleLogin}
            className='bg-green-700 rounded-lg px-6 py-2 text-white font-bold hover:bg-green-600 transition duration-200'
          >
            Login
          </button>
        </div>
      </form>

      <div className='mt-4 text-center'>
        <Link to="/signup" className="text-blue-400 hover:underline">
          New to devTinder? Sign up here
        </Link>
      </div>
    </div>
  );
};

export default Login;
