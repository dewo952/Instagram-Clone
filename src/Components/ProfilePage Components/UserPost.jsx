import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UserPost = () => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className="relative overflow-hidden w-full pt-[100%]"
      onMouseEnter={() => setOverlay(true)}
    >
      <a href="/#">
        <div
          className={`bg-gray-800 bg-opacity-60 h-full w-full absolute inset-0 z-10 flex items-center justify-center text-white ${
            overlay ? "" : "hidden"
          }`}
          onMouseLeave={() => setOverlay(false)}
        >
          <FontAwesomeIcon icon="heart" />
          <span className="ml-2">220</span>
          <FontAwesomeIcon icon="comment" className="ml-8" />
          <span className="ml-2">108</span>
        </div>
      </a>
      <img
        src="https://images.unsplash.com/photo-1668573347542-82ccfd2965fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        alt="post"
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  );
};

export default UserPost;
