import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="NewUser">
        <span>NewUser</span>
      </Link>
    </div>
  );
};

export default NavBar;
