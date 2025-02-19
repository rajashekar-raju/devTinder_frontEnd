import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector((store)=>store.user);

  const handleLogout = async() => {
      try{
        await axios.post("http://localhost:4000/logout",{},{withCredentials:true});
        dispatch(removeUser());
        navigate("/login");
      }catch(e){
        console.error(e);
      };
  }
  return (
    <div className="navbar bg-base-200">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
    </div>
    {result && <div className="flex-none gap-4">
      <div className="form-control">
        <h1>Welcome {result.firstName}</h1>
      </div>
      <div className="dropdown dropdown-end mr-3">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={result.photoUrl} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connections">connections</Link></li>
          <li><Link to="/requests">requests</Link></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>}
  </div>
  )
}

export default Navbar