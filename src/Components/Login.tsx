/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import loginImage from "../assets/login.webp";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/auth/authApi";
import { BASEURL } from "../Redux/api/baseApi";
import { userLoggedIn } from "../Redux/auth/authSlice";
import { useAppDispatch } from "../Redux/hooks";

export interface LoginData {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
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
  // social login=================
  const responseGoogle = async (authResult: any) => {
    // console.log("authResult:", authResult);
    if (authResult?.code) {
      // Log the authorization code
      try {
        const res = await fetch(`${BASEURL}auth/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: authResult.code }),
        });
        const data = await res.json();
        console.log("Response data:", data);
        if (data.success) {
          navigate("/");
          dispatch(userLoggedIn(data?.data));
          toast.success("Google logged in successfully", { autoClose: 1000 });
        } else {
          toast.error("Google login failed", { autoClose: 5000 });
        }

        console.log("Response data.success:", data);
      } catch (error) {
        console.error("CONNECTION_REFUSED:", error);
        toast.error("Google login failed", { autoClose: 5000 });
      }
    } else {
      // console.error("Google login failed", authResult);
      toast.error("Google login failed", { autoClose: 5000 });
    }
  };
  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.log("Login Failed:", error),
    flow: "auth-code",
    //  ux_mode: "redirect",
    //  redirect_uri: "http://localhost:5173/callback",
  });
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
            <p className="text-red-500 mt-2">
              Register failed. Please try again.
            </p>
          )}
          <div>
            <h1>
              Does not have an Account
              <Link to="/register" className=" underline font-bold ">
                Register
              </Link>
            </h1>
          </div>
          {/* social login */}
          <div className=" mt-5 w-full flex items-center justify-center ">
            <div className=" w-1/2 h-[1px] bg-black "></div>
            <p className=" text-xl px-2 ">Or</p>
            <div className=" w-1/2 h-[1px] bg-black "></div>
          </div>
          <div className=" my-6 ">
            <button
              onClick={googleLogin}
              className=" w-full p-2 py-3 bg-[#DB4437] text-white text-xl font-semibold rounded "
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
