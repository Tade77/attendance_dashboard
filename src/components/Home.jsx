import React from "react";
import { Link } from "react-router-dom";

const Home = ({ handleSearch, searchUser }) => {
  return (
    <div className="lan-page">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="search"
          name="query"
          className="search"
        />
        {searchUser.map((user) => (
          <Link to="Users_details">
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          </Link>
        ))}
      </form>

      <div className="home">
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQEVY87r-a0VIg/company-logo_200_200/0/1610554412112?e=2147483647&v=beta&t=PwfaauZ7s-FUGMMb0J61QoN_-TZPRnSYyIq4ffY_yGU"
            alt="cv--logo"
            className="logo"
          />
          <header>
            <h1 className="intro font-bold text-3xl mx-16 my-12">
              This is the official
              <br />
              homepage of codeVillage
            </h1>
          </header>
          <aside className="aside px-8 my-4 mx-4 fixed">
            <p className="desc -my-9">
              Build Your App, Faster and Reliable
              <br />
              Our team always ready to accept your challenge. To meet your
              <br /> goal is our main objective. Professional services, 24/7
              client
              <br /> support, teamwork and collaboration.
            </p>
          </aside>
          <Link to="Staff">
            <p className="link text mx-20 my-24 p-6 animate-bounce">
              check staff list{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
