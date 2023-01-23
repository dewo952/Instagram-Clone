import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import UserPost from "./UserPost";

const ProfilePost = () => {
  return (
    <>
      {/* Mobile View */}
      <ul className="flex flex-row p-2 text-sm items-center justify-center border-t text-gray-400 h-16 lg:hidden">
        <li className="flex-1 text-center">
          <strong className="text-black block">1</strong> Post
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">113</strong> Followers
        </li>
        <li className="flex-1 text-center">
          <strong className="text-black block">13</strong> Following
        </li>
      </ul>

      {/* Large Screen View */}
      <div className="flex flex-row text-2xl items-center justify-center border-t uppercase text-gray-400 h-16 tracking-widest lg:text-xs">
        {/* Post Icon */}
        <a
          href
          className="text-black border-t border-black  flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon="table-cells" />
          <span className="hidden ml-2 lg:inline-block">Post</span>
        </a>

        {/* Reels Icon */}
        <a
          href
          className="hover:text-black flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon="play" />
          <span className="hidden ml-2 lg:inline-block">Reels</span>
        </a>

        {/* Videos Icon */}
        <a
          href
          className="hover:text-black flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon={["far", "circle-play"]} />
          <span className="hidden ml-2 lg:inline-block">Videos</span>
        </a>

        {/* Saved Post Icon */}
        <a
          href
          className="hover:text-black flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon={["far", "bookmark"]} />
          <span className="hidden ml-2 lg:inline-block">Saved</span>
        </a>

        {/* Tagged Icon */}
        <a
          href
          className="hover:text-black flex justify-center items-center h-full mr-16 cursor-pointer"
        >
          <FontAwesomeIcon icon="user-tag" />
          <span className="hidden ml-2 lg:inline-block">Tagged</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-1 lg:gap-8">
      <UserPost/>
      <UserPost/>
      <UserPost/>

      </div>
    </>
  );
};

export default ProfilePost;
