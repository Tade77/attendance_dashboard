import React from "react";
// import React, { useEffect, useState } from "react";

const Staff = ({ users }) => {
  // console.log(users);
  const handleDetails = () => {
    alert("profile details is clicked");
  };
  return (
    <section className="container">
      <div className="staff--info">
        {users.map((user) => (
          <div key={user.id} className="card bg-white m-4">
            <img className="user" src={`${user.image}`} alt={user.image} />
            <p className="tt">{user.name}</p>
            <p className="tt">{user.department}</p>
            <button className="btn bg-green-200 p-1" onClick={handleDetails}>
              Profile Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
