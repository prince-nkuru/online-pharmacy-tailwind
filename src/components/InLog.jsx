import React, { useState } from "react";

const Log = () => {
  const [action, setAction] = useState("Sign Up"); // Default to 'Sign Up'
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto mt-[150px] mb-[300px] bg-black py-[40px] px-0 rounded-md">
      <div className="mb-[25px]">
        <div className="text-2xl font-bold text-green-600">
          {action} {/* Display current action: "Sign Up" or "Log In" */}
        </div>
      </div>
      <div className="flex flex-col gap-[9px] mb-[20px]">
        {action === "Log In" ? null : ( // Only show name input when signing up
          <div className="flex items-center bg-gray-300 rounded-[10px] w-full h-[50px]">
            <input
              placeholder="Enter name"
              type="text"
              className="border-none outline-none bg-transparent text-black font-bold pl-[10px] rounded-[20px] w-full"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        )}
        <div className="flex items-center bg-gray-300 rounded-[10px] w-full h-[50px]">
          <input
            className="border-none outline-none bg-transparent text-black font-bold pl-[10px] rounded-[20px] w-full"
            placeholder="Enter email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex items-center bg-gray-300 rounded-[10px] w-full h-[50px]">
          <input
            className="border-none outline-none bg-transparent text-black font-bold pl-[10px] rounded-[20px] w-full"
            placeholder="Enter password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {/* <label className="text-white font-bold">Remember me</label> */}
      </div>
      {action === "Sign Up" ? null : ( // Show 'forgot password' only when logging in
        <div className="text-white font-bold">
          Forgot password?{" "}
          <span className="text-green-700 cursor-pointer">Click here!</span>
        </div>
      )}
      <div className="flex gap-[15px] mt-[20px]">
        <div
          className={`${
            action === "Log In" ? "bg-green-600" : " bg-gray-300"
          } px-[30px] py-[10px] rounded-[10px] cursor-pointer`}
          onClick={() => setAction("Log In")}
        >
          Log In
        </div>
        <div
          className={`${
            action === "Sign Up" ? "bg-green-600" : " bg-gray-300"
          } px-[30px] py-[10px] rounded-[10px] cursor-pointer`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
      </div>
      {/* <div className="text-white">{name}</div>
      <div className="text-white">{password}</div> */}
    </div>
  );
};

export default Log;
