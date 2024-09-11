import React, { useState } from "react";
import loginImage from "../assets/login.webp";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../Redux/auth/authApi";
import ImageUpload from "./ImageUpload";
export interface LoginData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image?: string | null;
}
const Register: React.FC = () => {
  const [signup, { isLoading, isError }] = useSignupMutation();
  const navigate = useNavigate();
  // name,email,password,image,phone,address
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data: LoginData = {
        name,
        email,
        password,
        phone,
        address,
        image: uploadedImageUrl,
      };
      console.log("data:", data);
      const result = await signup(data).unwrap();

      if (result) {
        toast.success("Login successful");
        navigate("/login");
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
            member Register
          </h1>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4 ">
            <input
              type="name"
              placeholder="name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full p-2 outline outline-black rounded "
              required
            />
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
            <input
              type="phone"
              placeholder="phone *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" w-full p-2 outline outline-black rounded "
              required
            />
            <input
              type="address"
              placeholder="address *"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className=" w-full p-2 outline outline-black rounded "
              required
            />
            <ImageUpload setUploadedImageUrl={setUploadedImageUrl} />
            <button
              disabled={isLoading}
              type="submit"
              className=" w-full p-2 py-3 bg-black text-white text-xl font-semibold rounded "
            >
              {isLoading ? "Register in..." : "Register"}
            </button>
          </form>
          {isError && (
            <p className="text-red-500 mt-2">
              Register failed. Please try again.
            </p>
          )}
          <div>
            <h1>
              Already have an Account{" "}
              <Link to="/login" className=" underline font-bold ">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// Register;
