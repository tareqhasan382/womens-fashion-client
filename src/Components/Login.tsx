import React, { useState } from "react";
import loginImage from "../assets/login.webp";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/auth/authApi";
export interface LoginData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [login, { isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data: LoginData = {
        email,
        password,
      };

      const result = await login(data).unwrap();

      if (result) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className=" w-full h-full flex items-start justify-center md:pt-20  ">
      {/* iPhone 6-8 landscape · width: 667px */}
      <div className=" lg:w-[70%] w-full flex md:flex-row landscape:flex-row flex-col items-center justify-center ">
        {/* image section */}
        <div className=" lg:w-1/2 w-full">
          <img src={loginImage} alt="Login Image" className="  " />
        </div>
        {/* login form section */}
        <div className=" lg:w-1/2 w-full lg:p-10 p-5 ">
          <h1 className=" capitalize w-full text-center py-10 text-3xl font-bold ">
            member login
          </h1>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
            <input
              type="email"
              placeholder="email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full p-2 outline outline-black rounded "
              required
            />
            <input
              type="password"
              placeholder="password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full p-2 outline outline-black rounded "
              required
            />
            <button
              disabled={isLoading}
              type="submit"
              className=" w-full p-2 py-3 bg-black text-white text-xl font-semibold rounded "
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {isError && (
            <p className="text-red-500 mt-2">Login failed. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
