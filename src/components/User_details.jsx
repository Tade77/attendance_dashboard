import React from "react";

const User_details = ({ searchUser, handleDetails }) => {
  const timeIn = new Date().toLocaleTimeString();
  const date = new Date().toDateString();
  return (
    <div className="single--user bg-lime-200 py-12  ">
      {searchUser.map((user) => (
        <div
          key={user.id}
          className="single  flex flex-col items-center rounded-xl"
        >
          <img
            className="user"
            src={
              user.image
                ? user.image
                : "https://participate.peoplepowered.org/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"
            }
            alt={user.image}
          />
          <h3 className="name text-center text-3xl">{user.name}</h3>
          <p className="dep text-center text-xl">{user.department}</p>
          <div>
            {handleDetails && (
              <>
                <h1 className=" text-center text-lg font-semibold  ">
                  Sign in details
                </h1>
                {/* <p>{user.name}</p> */}
                {/* <p>{user.department}</p> */}
                <p className=" text-center">Date: {date}</p>
                <p className=" text-center">login time: {timeIn}</p>
              </>
            )}
            {/* <button
              className="btn py-1 px-8 rounded-t rounded-b"
              style={{ background: "rgb(170 254 226)", color: "darkgreen" }}
              onClick={handleDetails}
            >
              Profile Details
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default User_details;
