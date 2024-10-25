import React from "react";

const ConnectionsDataCard = ({ userData }) => {
  const { firstName, lastName, age, gender, photoUrl } = userData;

  return (
    <div className="p-4 mx-auto">
      <div className="card card-side bg-base-300 shadow-xl">
        <figure className="w-1/3">  {/* Adjusted to 1/3 of the width */}
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
            eius illo error autem sit, qui neque voluptatibus architecto quasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsDataCard;
