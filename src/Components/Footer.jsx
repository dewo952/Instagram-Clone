import React from "react";

const Footer = () => {
  return (
    <div className="py-5 text-center">
      <ul className="flex flex-row space-x-4 p-2 text-xs items-center justify-center text-gray-400">
        <li>
          <a href="/" className="cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a href="/" className="cursor-pointer">
            Privacy
          </a>
        </li>
        <li>
          <a href="/" className="cursor-pointer">
            Terms
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
