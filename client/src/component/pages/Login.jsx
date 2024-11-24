import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      setTimeout(() => {
        console.log(email);
      }, 1000);
      setTimeout(() => {
        console.log(password);
      }, 4000);
      toast("login success");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-2/3 h-fit p-8 flex">
      <Toaster />
      <form className="w-full h-fit flex justify-center items-start gap-4 flex-col text-white bg-red-300 p-8">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id=""
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
          className="w-full rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          id=""
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full rounded-md p-2"
        />
        <p>
          don't have an account? <NavLink to={"/signup"}>Signup</NavLink>
        </p>
        <div>
          <input type="checkbox" name="" id="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md p-2 bg-gray-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <div className="w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-gray-500"></div>
    </div>
  );
};

export default Login;
