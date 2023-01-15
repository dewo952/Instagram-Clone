/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import iphoneinstagram from "../Assets/iphoneinstagram.png";
import instagram from "../Assets/instagram.png";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {} = props;
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="flex flex-column">
        <div className="pr-10 hidden md:block">
          <img src={iphoneinstagram} alt="Android" width="300" />
        </div>
        <div>
          <div className="bg-white border border-gray-300 w-80 pt-10 pb-60 flex items-center flex-col mb-3 relative">
            <img src={instagram} alt="instagram logo" width="200" />
            <form action="" className="mt-8 w-64 flex flex-col">
              <input
                autoFocus
                type="text"
                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                value={email}
                placeholder="Phone number, username or email"
              />
              <input
                type="text"
                className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                value={password}
                placeholder="Password"
              />
              <button className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
                Log In
              </button>
            </form>
            <div className="text-sm text-center text-red-500 absolute bottom-20 px-8">
              Sorry, your email/password was incorrect. Please double-check and
              try again
            </div>
          </div>
          <div className="bg-white border border-gray-300 text-center w-80 py-4">
            <span className="text-sm">Don't have an account?</span>
            <a className="text-blue-500 text-sm font-semibold ml-1 cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
