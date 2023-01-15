/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const EditProfitePage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
    {/* UserProfile Section */}
      <div className="flex flex-row">
        <div className="w-1/3 p-3">
          <a className="float-right mr-5">
            <img
              src="https://randomuser.me/api/portraits/men/8.jpg"
              width="40"
              alt=""
              className="rounded-full"
            />
          </a>
        </div>
        <div>
          <h1 className="text-2xl">user123</h1>
          <a className="text-sm text-sky-500 font-bold">Change Profile Phote</a>
        </div>
      </div>

      {/* Name Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Name
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-gray-400 text-xs">
            Help people discover your account by using the name you're known by:
            either your full name, nickname, or business name.
          </p>
        </div>
      </div>

      {/*Username Field  */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Username
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      {/* Website Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Website
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="https://website.com"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>

      {/* Bio Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Bio
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <textarea
            type="text"
            rows="3"
            className="border p-1 px-3 w-full"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Email
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Number Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Phone Number
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8"></div>
        <div className="w-2/3 pr-10">
          <button
            className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50"
            type="Submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfitePage;
