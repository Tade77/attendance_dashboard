import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ searchUserData, handleDetails }) => {
  const timeIn = new Date().toLocaleTimeString();
  const date = new Date().toDateString();
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  console.log({ id });
  const fetchUserData = async (e) => {
    console.log("hereeeee");
    console.log({ idDetails: id });
    try {
      const { data } = await axios(`http://localhost:3001/users/${id}`);
      console.log({ data });
      console.log("hereeeee moww");

      setUserData(data);
    } catch {
      (error) => console.log(error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="single--userData bg-lime-200 py-12  ">
      {/* {searchUserData.map((userData) => ( */}
      <div className="single  flex flex-col items-center rounded-xl">
        <img
          className="userData"
          src={
            userData.image
              ? userData.image
              : "https://participate.peoplepowered.org/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"
          }
          alt={userData.image}
        />
        <h3 className="name text-center text-3xl">{userData.name}</h3>
        <p className="dep text-center text-xl">{userData.department}</p>
        <div>
          {handleDetails && (
            <>
              <h1 className=" text-center text-lg font-semibold  ">
                Sign in details
              </h1>
              {/* <p>{userData.name}</p> */}
              {/* <p>{userData.department}</p> */}
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
      {/* ))} */}
    </div>
  );
};

export default UserDetails;
