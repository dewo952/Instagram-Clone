import React from "react";
import usericons from "../../Assets/usericons.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileHeader = ({ setIsSettingModalOpen }) => {
  return (
    <div className="grid grid-cols-3 mb-10">
      <div className="bg-green p-3 rounded flex items-start justify-center">
        <img
          className="rounded-full h-36 "
          src={usericons}
          alt="Profile_Picture"
          width={150}
        />
      </div>
      <div className="p-3 text-gray-600 col-span-2">
        <div className="flex items-center">
          <h1 className="inline-block text-3xl align-bottom">dewo952</h1>
          <button className="bg-white ml-3 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded text-sm">
          <a href="/accounts">
            Edit Profile

          </a>
          </button>
          <a
            href
            className="ml-3 cursor-pointer"
            onClick={() => setIsSettingModalOpen(true)}
          >
            <FontAwesomeIcon icon="gear" className="text-2xl leading-6" />
          </a>
        </div>
        <div className="flex-row py-5 max-w-sm hidden lg:flex">
          <div className="basis-1/3">
            <strong>1</strong> Post
          </div>
          <div className="basis-1/3">
            <strong>113</strong> Followers
          </div>
          <div className="basis-1/3">
            <strong>13</strong> Following
          </div>
        </div>
        <h3 className="font-bold">Diven Khatri</h3>
        <a
          href="https://diven-khatri-portfolio.vercel.app/"
          className="text-blue-900 font-bold"
        >
          PortFolio
        </a>
      </div>
    </div>
  );
};

export default ProfileHeader;
