import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:3001/details/${id}`).then((res) => {
      setUser(res.data);
      // Console log is for testing
      // console.log(users);
    });
  });

  const { id } = useParams();

  return (
    <div className="w-full h-full flex justify-center items-center">
      {user && (
        <>
          <div>
            <div className="w-[1000px] h-[320px] border bg-blue-100 border-black flex justify-center items-center px-6 py-4 mt-12 rounded-lg">
              <div className="w-5/12 flex flex-col uppercase font-bold space-y-4">
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  Name :-
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  Role :-
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  Experience :-
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  Contact :-
                </h2>
              </div>
              <div className="w-5/12 flex flex-col space-y-4">
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  {user.name}
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  {user.role}
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  {user.experience}
                </h2>
                <h2 className="text-black text-bold text-2xl border-b border-black">
                  {user.email}
                </h2>
              </div>
            </div>
            <div className="w-full flex justify-center gap-4 mt-5">
              <Link
                to={"/"}
                className="bg-pink-500 font-bold flex justify-center items-center text-white w-36 h-12 p-2 rounded-md"
              >
                All Users
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
