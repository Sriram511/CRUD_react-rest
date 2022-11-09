import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // The Main Navbar and its property
    <div className="w-full h-18 flex bg-pink-500 items-center px-10 py-3 justify-between">
      {/* Title of the Navbar */}
      <Link to={"/"} className="text-white font-bold text-3xl">
        CRUD{" "}
      </Link>
      {/* Button for Add User */}
      <Link
        to={"/addUser"}
        className="bg-blue-500 font-bold flex justify-center items-center text-white w-36 h-12 p-2 rounded-md"
      >
        Add User
      </Link>
    </div>
  );
};

export default Navbar;
