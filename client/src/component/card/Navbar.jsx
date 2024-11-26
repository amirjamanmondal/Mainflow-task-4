import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5050/user/logout/`, {
        withCredentials: true,
      });
      toast("logout success");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      toast(error.message);
    }
  };
  return (
    <div className="w-full h-fit flex justify-around items-center gap-4 p-4 bg-sky-800">
      <Toaster />
      <div className="text-xl p-2 font-bold">TechBroker</div>
      <ul className=" flex gap-5 text-lg font-light ">
        {user ? (
          <button className="bg-white text-lg" onClick={(e) => handleLogout(e)}>
            Logout
          </button>
        ) : (
          <div className="w-fit h-fit flex gap-2">
            <NavLink
              to={"/login"}
              className=" p-2  rounded-lg text-white hover:bg-white"
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className="bg-red-400 p-2 rounded-lg text-white hover:bg-white"
            >
              Signup
            </NavLink>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
