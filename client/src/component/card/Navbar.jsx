import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-fit flex justify-around items-center gap-4 p-4 bg-sky-800">
      <div className="text-xl p-2 font-bold">TechBroker</div>
      <ul className=" flex gap-5 text-lg font-light ">
        <NavLink
          to={"/login"}
          className="bg-black px-2 py-1 rounded-lg text-white hover:bg-white"
        >
          Login
        </NavLink>
        <NavLink
          to={"/signup"}
          className="bg-black px-2 py-1 rounded-lg text-white hover:bg-white"
        >
          Signup
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
