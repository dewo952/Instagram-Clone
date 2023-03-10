import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Settings = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="container pt-8 max-w-5xl">
      <div className="border flex flex-row bg-white min-h-[80vh]">
        <div className="w-1/4 border-r">
          <ul>
          
            {/* Edit Profile Section */}
            <li>
              <Link
                className={`block cursor-pointer p-4 px-8 ${
                  pathname === "/accounts/edit"
                    ? "font-bold border-l-2 border-l-black"
                    : ""
                }`}
                to="edit"
              >
                Edit Profile
              </Link>
            </li>

            {/* Change Password Section */}
            <li>
              <Link
                className={`block cursor-pointer p-4 px-8 ${
                  pathname === "/accounts/password"
                    ? "font-bold border-l-2 border-l-black"
                    : ""
                }`}
                to="password"
              >
                Change Password
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-3/4 pt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Settings;
