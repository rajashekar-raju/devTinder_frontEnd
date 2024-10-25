import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store)=>store.user);
  const refreshedData = async() => {
    if(userData) return;  // if user is not logged in, stop here.
    try{
      const result = await axios.get("http://localhost:4000/profile",{withCredentials:true});
      dispatch(addUser(result.data));
    }catch(e){
      // if error comes you may need to return to /login page 
      // if token expires user should move to /login
      console.log(e)
    }
  }
  useEffect(()=>{
    refreshedData();
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Body