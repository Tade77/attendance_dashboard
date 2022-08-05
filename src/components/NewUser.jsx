import React from "react";

const NewUser = (props) => {
  return (
    <div className="new--user">
      <form className="form" onSubmit={props.addNewUser}>
        <h1 className="txt font-extrabold text-lg">New user login form</h1>
        <label htmlFor="fullname" className=" mx-4">
          Fullname
          <input
            type="text"
            placeholder="fullname"
            value={props.newName}
            onChange={props.handleNewName}
            required
            className="inp m-4 px-12"
          />
        </label>
        <label htmlFor="department" className=" mx-4">
          Department
          <input
            type="text"
            placeholder="department"
            value={props.newDep}
            onChange={props.handleNewDep}
            required
            className="inp m-4 px-12"
          />
        </label>
        <label htmlFor="password" className=" mx-4">
          Password
          <input
            type="text"
            placeholder="password"
            value={props.newPass}
            onChange={props.handleNewPass}
            required
            className="inp m-4 px-12"
          />
        </label>
        <button
          type="submit"
          className="create p-1 bg-cyan-600 text-slate-50 rounded-l-3xl rounded-r-3xl m-1"
        >
          Create account
        </button>
        <div className="contact flex flex-row gap-4 cursor-pointer ">
          <a href="http://www.twitter.com/codevillageL">
            <img
              src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg"
              alt="twitter"
              className=" h-8 w-8"
            />
          </a>
          <a href="http://www.facebook.com/codevillageL">
            <img
              src="http://alysonschafer.com/wp-content/uploads/2014/05/6a00d83451b36c69e201bb0955aa16970d-600wi.png"
              alt="fb"
              className=" h-9 w-9"
            />
          </a>
          <a href="http://www.github.com/codevillageLLC">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="git"
              className=" h-9 w-9"
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
