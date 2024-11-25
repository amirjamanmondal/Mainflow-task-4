import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../card/Navbar";
import axios from "axios";

const Landing = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:5050/user/`, {
          withCredentials: true,
        });
        const data = res.data;
        setUser(data.user);
        console.log(data.user);
      } catch (error) {
        console.error(error.message);
        navigate('/login')
      }
    })();
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
      <Navbar />
      <div className="w-1/2 h-80 rounded-md flex flex-col justify-start items-start p-6 gap-8 bg-white border">
        <h1 className="text-2xl">{user.name} ,Welcome to Software Solution</h1>
        <p className="text-lg font-sans ">
          We’re excited to have you here. Explore our products and services, or
          learn more about our mission. We’re committed to providing you with
          the best possible experience.
        </p>

        <NavLink
          to={"/signup"}
          className="rounded-full bg-fuchsia-500 p-2 text-white border-lime-400 border-2"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
