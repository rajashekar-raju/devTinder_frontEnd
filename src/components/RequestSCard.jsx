import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestsSlice";

const RequestSCard = ({ user, requestId}) => {
    const dispatch = useDispatch();
  const { firstName, lastName, age, gender, photoUrl } = user.fromUserId;

  const handleAcceptRequest = async (status, _id) => {
    try {
      const requestData = await axios.post(`http://localhost:4000/request/review/${status}/${_id}`, {}, { withCredentials: true });
      dispatch(removeRequest(_id));  // Only dispatch if the request succeeds
    } catch (e) {
      console.error("Error reviewing request:", e.response?.data?.message || e.message); // Log the error message
    }
  };
  

  return (
    <div>
      <div className="p-4 mx-auto">
        <div className="card card-side bg-base-300 px-2 shadow-xl">
          <figure className="w-1/4">
            {" "}
            {/* Adjusted to 1/3 of the width */}
            <img
              src={photoUrl}
              alt="userPhoto"
              className="h-52 w-full object-cover rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Skills: [HTML, CSS, React, JavaScript]</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ut
              eius illo error autem sit, qui neque voluptatibus architecto
              quasi.
            </p>
          <div className="">
            <button onClick={()=>handleAcceptRequest("accepted",requestId)} className="btn mr-2 btn-primary">Accept</button>
            <button onClick={()=>handleAcceptRequest("rejected",requestId)} className="btn btn-ghost">Deny</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSCard; 
