import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gender, photoUrl } = user;
  const dispatch = useDispatch();
  const getNextDataCard = async (status, userId) => {
    try {
      const userData = await axios.post(
        "http://localhost:4000/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFeed(userId));
    } catch (error) {
      console.error("Error fetching next user data", error);
    }
  };

  return (
    user && (
      <div className="mx-auto mt-5">
        <div className="card bg-base-300 w-96 shadow-xl mx-auto">
          <figure>
            <img src={photoUrl} alt="user photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <p>Age: {age}</p>
            <p>gender: {gender}</p>
            <div className="card-actions justify-between">
              <button
                onClick={() => getNextDataCard("ignored", _id)}
                className="btn btn-primary"
              >
                ignore
              </button>
              <button
                onClick={() => getNextDataCard("intrested", _id)}
                className="btn btn-secondary"
              >
                intrested
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
