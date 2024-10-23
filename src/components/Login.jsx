import React, { useState, useContext } from "react";
import Button from "./Button";
import { AuthContext } from "./AuthContext"; // Import AuthContext
import { useNavigate } from "react-router-dom"; // For navigation

const Login = () => {
  const { login } = useContext(AuthContext); // Get the login function from context
  const [action, setAction] = useState("Log In"); // Default to 'Sign Up'
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // For navigation after login

  const handleSubmit = (event) => {
    event.preventDefault();

    if (action === "Log In") {
      // Handle login logic (you might want to validate credentials here)
      // For simplicity, we'll assume the login is successful
      login(); // Call the login function to update the context
      navigate("/buy"); // Redirect to the buy page or another page
    } else {
      // Handle sign-up logic (you might want to send this data to your backend)
      console.log("Sign Up:", { name, email, password });
      // After signing up, you can redirect or display a message
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center max-w-[500px] mx-auto mt-[150px] mb-[300px] bg-transparent py-[40px] px-0 rounded-md">
        <div className="mb-[25px]">
          <div className="text-2xl font-bold text-slate-900">
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
              required
            />
          </div>
          <div className="flex items-center bg-gray-300 rounded-[10px] w-full h-[50px]">
            <input
              className="border-none outline-none bg-transparent text-black font-bold pl-[10px] rounded-[20px] w-full"
              placeholder="Enter password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
        </div>
        {action === "Sign Up" ? null : ( // Show 'forgot password' only when logging in
          <div className="text-black font-bold">
            Forgot password?{" "}
            <span className="text-teal-300 cursor-pointer">Click here!</span>
          </div>
        )}
        <div className="flex gap-[15px] mt-[20px] mb-4">
          <div
            className={`${
              action === "Log In"
                ? "bg-slate-900 text-white font-bold"
                : "bg-gray-300 text-black font-bold"
            } px-[30px] py-[10px] rounded-[10px] cursor-pointer`}
            onClick={() => setAction("Log In")}
          >
            Log In
          </div>
          <div
            className={`${
              action === "Sign Up"
                ? "bg-slate-900 text-white font-bold"
                : "bg-gray-300 text-black font-bold"
            } px-[30px] py-[10px] rounded-[10px] cursor-pointer`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Login;
