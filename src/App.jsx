import * as React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
//components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NewUser from "./components/NewUser";
import Staff from "./components/Staff";
import User_details from "./components/User_details";

const App = () => {
  const [users, setUsers] = useState([]);
  const [newName, setMewName] = useState("");
  const [newDep, setNewDep] = useState("");
  const [newPass, setNewPass] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const addNewUser = async (e) => {
    e.preventDefault();
    e.target.value;
    const details = {
      name: newName,
      department: newDep,
      password: newPass,
      id: users.length + 1,
    };
    try {
      axios.post("http://localhost:3001/users", details).then((res) => {
        setUsers(users.concat(res.data));
        setMewName("");
        setNewDep("");
        setNewPass("");
      });
    } catch {
      (error) => console.log(error);
    }

    // setUsers(users.concat(details));
  };
  const handleNewName = (e) => {
    setMewName(e.target.value);
    console.log(e.target.value);
  };
  const handleNewDep = (e) => {
    setNewDep(e.target.value);
    console.log(e.target.value);
  };
  const handleNewPass = (e) => {
    setNewPass(e.target.value);
    console.log(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const person = e.target.query.value;
    try {
      const { data } = await axios(`http://localhost:3001/users?q=${person}`);
      setSearchUser(data);
    } catch {
      (error) => console.log(error);
    }
  };
  const handleDetails = (e) => {
    e.target.value;
    // searchUser(users.concat(User_details));
  };
  return (
    <div>
      <div className="App">
        <NavBar />
        <Routes>
          {/* <Route> */}
          <Route
            path="/"
            element={
              <Home handleSearch={handleSearch} searchUser={searchUser} />
            }
          />
          <Route path="Staff" element={<Staff users={users} />} />
          <Route
            path="NewUser"
            element={
              <NewUser
                addNewUser={addNewUser}
                handleNewName={handleNewName}
                handleNewDep={handleNewDep}
                handleNewPass={handleNewPass}
              />
            }
          />
          {/* </Route> */}
          {/* <Route path="/"> */}
          {/* <Route index={true} element={<Home />} /> */}
          <Route
            path="Users_details/:id"
            element={
              <User_details
                searchUser={searchUser}
                handleDetails={handleDetails}
              />
            }
          />
          {/* </Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
