import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState(" ");
  const [role, setRole] = useState(" ");
  const [experience, setExperience] = useState(" ");
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();

  const data = {
    name: name,
    role: role,
    experience: experience,
    email: email,
  };

  function Submit(e) {
    e.preventDefault();

    Axios.post("http://localhost:3001/details", data).then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-6">
      <h1 className="text-3xl  text-blue-600 uppercase font-bold">
        Add New User
      </h1>
      <div>
        <form className="w-[100%] h-full flex flex-col justify-center items-center mt-4"></form>
        <label className="text-xl text-gray-700">Enter your Name :- </label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Markcus Stoinis"
          className="felx flex-col w-[100%] text-center rounded-lg p-3 bg-blue-100"
        />
        <label className="text-xl text-gray-700">Enter your Role :-</label>
        <br />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          type="text"
          placeholder="BackEnd Developer"
          className="felx flex-col w-[100%] text-center rounded-lg p-3 bg-blue-100"
        />
        <label className="text-xl text-gray-700">Experience :- </label>
        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          type="text"
          placeholder="1 Year"
          className="felx flex-col w-[100%] text-center rounded-lg p-3 bg-blue-100"
        />
        <label className="text-xl text-gray-700">Contact :- </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="yourEmail@gmail.com"
          className="felx flex-col w-[100%] text-center rounded-lg p-3 bg-blue-100"
        />
        <div className="flex justify-between">
          <Link
            to={"/"}
            className="bg-pink-500 w-[40%] flex mt-5 p-3 rounded-lg text-white justify-center items-center font-bold text-xl"
          >
            All Users
          </Link>
          <button
            onClick={Submit}
            className="bg-blue-500 w-[40%]  mt-5 p-3 rounded-lg text-white font-bold text-xl"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
