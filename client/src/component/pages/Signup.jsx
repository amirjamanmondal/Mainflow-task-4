import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-2/3 h-fit p-8 flex gap-2">
      <div className="w-full h-fit"></div>
      <form className="w-full h-fit flex justify-center items-start gap-4 flex-col text-white bg-red-300 p-8">
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          required
          className="w-full rounded-md p-2"
        />

        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your Email"
          required
          className="w-full rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter your password"
          required
          className="w-full rounded-md p-2"
        />
        <p>
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </p>

        <button type="submit" className="w-full rounded-md p-2 bg-gray-300">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
