/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stories = () => {
  return (
    <div className="relative mb-5">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
        <a className="bg-white text-gray-400 flex items-center justify-center rounded-full w-6 h-6 text-xs shadow-md cursor-pointer">
          <FontAwesomeIcon icon="chevron-left" />
        </a>
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
        <a className="bg-white text-gray-400 flex items-center justify-center rounded-full  w-6 h-6 text-xs shadow-md cursor-pointer">
          <FontAwesomeIcon icon="chevron-right" />
        </a>
      </div>

      <ul className="border rounded-lg border-slate-200 p-4 flex space-x-4 overflow-x-hidden">
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
        <li className="flex flex-col items-center space-y-1">
          <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 rounded-full">
            <a className="block bg-white p-0.5 rounded-full cursor-pointer">
              <img
                src="https://randomuser.me/api/portraits/women/5.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
            </a>
          </div>
          <a className="cursor-pointer">
            <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
              User1
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Stories;
