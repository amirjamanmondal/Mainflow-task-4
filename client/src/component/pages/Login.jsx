import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5050/user/login`,
        { email, password },
        { withCredentials: true }
      );

      toast("login success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast("/login");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-1/3 h-fit flex justify-center items-start gap-8 flex-col text-white bg-red-400 p-8 mt-4">
        <Toaster />
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />
        <input
          type={show ? "text" : "password"}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />

        <p>
          don't have an account? <NavLink to={"/signup"}>Signup</NavLink>
        </p>
        <div>
          <input
            type="checkbox"
            name=""
            id="remember"
            onClick={() => setShow(!show)}
          />
          <label htmlFor="remember"> Show Password</label>
        </div>
        <button
          type="submit"
          className="w-full rounded-md p-2 bg-blue-500"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
