/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ChangePasswordPage = () => {
  return (
    <>
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
        </div>
      </div>

      {/* New Password Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Password
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Password"
          />
        </div>
      </div>

      {/* Confirm New Password Field */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8">
          <label
            htmlFor=""
            className="m-0 p-0 align-baseline font-bold flex align-center"
          >
            Confirm Password
          </label>
        </div>
        <div className="w-2/3 pr-10">
          <input
            type="text"
            className="border p-1 px-3 w-full"
            placeholder="Confirm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex flex-row mt-5 items-center">
        <div className="w-1/3 flex flex-row place-content-end align-center pr-8"></div>
        <div className="w-2/3 pr-10 mt-3 ">
          <button
            className="bg-sky-500 text-white font-semibold py-1 px-2 rounded text-sm disabled:opacity-50"
            type="Submit"
          >
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPage;
