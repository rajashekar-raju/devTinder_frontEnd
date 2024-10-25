import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender); // Default to empty string if not available
  const [about, setAbout] = useState(user.about);
  const [toast,setToast] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdateProfile = async () => {
    try {
      const result = await axios.patch(
        "http://localhost:4000/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          about,
          photoUrl,
        },
        { withCredentials: true }
      );
      dispatch(addUser(result.data)); // Update user data in the store
      setToast(true);
      const time = setTimeout(() => {
        setToast(false);
        navigate("/");
      }, 2000);

      return () => clearTimeout(time);


    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="flex justify-center mx-auto items-center gap-5">
        <div className="w-1/4 mt-5 bg-base-300 p-3 rounded-lg">
    <h1 className="text-2xl font-bold text-center">Edit profile</h1>
          <div className="flex flex-col gap-1 my-2">
            <label className="px-2">FirstName:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-4 py-2 rounded-lg border-none"
            />
          </div>
          <div className="flex flex-col gap-1 my-2">
            <label className="px-2">LastName:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-4 py-2 rounded-lg border-none"
            />
          </div>
          <div className="flex flex-col gap-1 my-2">
            <label className="px-2">PhotoUrl:</label>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="px-4 py-2 rounded-lg border-none"
            />
          </div>
          <div className="flex flex-col gap-1 my-2">
            <label className="px-2">Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="px-4 py-2 rounded-lg border-none"
            />
          </div>
          <div className="flex flex-col gap-1 my-2">
            <label className="px-2">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-4 py-2 rounded-lg border-none"
            >
              <option value="">Select Gender</option> {/* Placeholder */}
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          {about && (
            <div className="flex flex-col gap-1 my-2">
              <label className="px-2">About:</label>
              <input
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="px-4 py-2 rounded-lg border-none"
              />
            </div>
          )}
          <div className="mt-3 text-center">
            <button
              onClick={handleUpdateProfile}
              className="px-4 py-2 rounded-lg text-black bg-green-600"
            >
              Update Profile
            </button>
          </div>
        </div>
        <div>
          <UserCard user={{ firstName, lastName, age, gender, photoUrl }} />
        </div>
      </div>
      {toast && <div className="toast toast-top toast-end">
        <div className="alert alert-info">
          <span>profile saved successfully.</span>
        </div>
        {/* <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div> */}
      </div>}
    </>
  );
};

export default EditProfile;
