import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const ageNum = parseInt(age);
      const res = await axios.post(
        `http://localhost:5050/user/signup`,
        { name, email, age: ageNum, gender, password },
        { withCredentials: true }
      );
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <form className="w-1/3 h-fit flex justify-center items-start gap-4 flex-col text-white bg-red-400 p-8 mt-4">
        <h1 className="text-4xl">Signup</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-fit rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        >
          <>
            <option value="none" className="bg-black">
              Select Gender
            </option>
          </>
          <option value="male" className="bg-black">
            Male
          </option>
          <option value="female" className="bg-black">
            Female
          </option>
        </select>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          className="w-full rounded-md p-2 bg-transparent border-2 border-white placeholder:text-white"
        />
        <p>
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </p>

        <button
          type="submit"
          className="w-full rounded-md p-2 bg-blue-500"
          onClick={(e) => handleSignup(e)}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
