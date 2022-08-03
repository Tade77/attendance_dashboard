import React from "react";

const NewUser = (props) => {
  return (
    <div className="new--user">
      <form className="form" onSubmit={props.addNewUser}>
        <h1 className="txt font-extrabold text-lg">New user login form</h1>
        <input
          type="text"
          placeholder="fullname"
          value={props.newName}
          onChange={props.handleNewName}
          required
          className="inp m-4 px-12"
        />
        <input
          type="text"
          placeholder="department"
          value={props.newDep}
          onChange={props.handleNewDep}
          required
          className="inp m-4 px-12"
        />
        <input
          type="text"
          placeholder="password"
          value={props.newPass}
          onChange={props.handleNewPass}
          required
          className="inp m-4 px-12"
        />
        <button className="create p-2 bg-cyan-600 text-slate-50 rounded-l-3xl rounded-r-3xl">
          Create account
        </button>
      </form>
    </div>
  );
};

export default NewUser;
