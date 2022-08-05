import React from "react";
// import React, { useEffect, useState } from "react";
// https://www.seekpng.com/png/detail/242-2424291_png-file-broken-email-icon-png.png

const Staff = ({ users }) => {
  console.log(users);
  const handleDetails = () => {
    alert("profile details is clicked");
  };
  return (
    <section className="container">
      <div className="staff--info">
        {users.map((user) => (
          <div key={user.id} className="card bg-white m-4">
            <img
              className="user"
              src={
                user.image
                  ? user.image
                  : "https://participate.peoplepowered.org/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"
              }
              alt={user.image}
            />
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
