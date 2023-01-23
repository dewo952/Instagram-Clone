import React from "react";


const BasicProfile = () => {
  return (
    <div className="flex flex-row">
      <a href>
        <img
          className="rounded-full w-28 "
          src="https://randomuser.me/api/portraits/men/9.jpg"
          alt=""
          width="100"
        />
      </a>
      <div className="w-72 pl-2 m-auto">
        <div className="text-sm font-medium">
          <a href>Diven Khatri</a>
        </div>
        <div className="text-gray-500 text-sm">Frontend I React Developer</div>
      </div>
      <div className="w-32 text-right m-auto">
        <a href className="text-xs text-sky-500 font-bold cursor-pointer">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default BasicProfile;
