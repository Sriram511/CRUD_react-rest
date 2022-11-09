import React, { useEffect, useState } from "react";
import Axios from "axios";
import * as Icons from "react-icons/bi";
import * as DelIcons from "react-icons/ai";
import * as VueIcons from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {
  // Set state for get the user details from json file
  const [users, setUsers] = useState([]);

  // Function for api calling
  const allUsers = () => {
    Axios.get("http://localhost:3001/details").then((res) => {
      setUsers(res.data.reverse());
    });
  };

  // UseEffect for placing the data's in the correct order
  useEffect(() => {
    // Console log is for testing
    // console.log(users);
    allUsers();
  }, [users]);

  function Delete(id) {
    if (window.confirm("Are you sure you want to Delete thid User") === true) {
      Axios.delete(`http://localhost:3001/details/${id}`).then(allUsers());
    } else {
      return allUsers();
    }
  }

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <h1 className="text-3xl text-blue-600 flex flex-col justify-center items-center uppercase font-bold">
        All Users
      </h1>

      <div className="p-5 h-screen">
        <div className="overflow-auto rounded-lg shadow-gray-800">
          <table className="w-full border">
            <thead className="bg-gray-800 border-b-2 text-white  border-sky-500">
              <tr>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  S.No
                </th>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  Role
                </th>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  Experience
                </th>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  Contact
                </th>
                <th className="p-3 text-sm uppercase font-bold tracking-wide text-left">
                  Actions
                </th>
              </tr>
            </thead>
            {/* This console is for debug , the data is coming or not */}
            {/* {console.log(users)} */}
            {/*  */}
            <tbody className="text-left font-semibold text-lg">
              {users.map((data, index) => (
                <tr key={index} className="bg-blue-100">
                  <td className="p-3 whitespace-nowrap">{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.role}</td>
                  <td>{data.experience}</td>
                  <td>{data.email}</td>
                  <td className="cursor-pointer flex justify-center gap-3 mt-3">
                    <Link to={`/users/${data.id}`}>
                      <VueIcons.GrView />
                    </Link>
                    <Link to={`/editUser/${data.id}`}>
                      <Icons.BiEdit className="text-green-600" />
                    </Link>
                    <button onClick={() => Delete(data.id)}>
                      <DelIcons.AiOutlineDelete className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
