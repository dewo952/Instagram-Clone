/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostDialogModal from "../PostDialogModal";
import PostInLargeModal from "../PostInlargeModal";

const Post = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  return (
    <>
      <PostDialogModal open={isModelOpen} setOpen={setIsModelOpen} />
      <PostInLargeModal open={isPostModalOpen} setOpen={setIsPostModalOpen} />
      <div className="border rounded-lg border-slate-200 mb-5 bg-white">
        <div className="p-3 flex flex-row">
          <div className="flex-1">
            <a href="/">
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt=""
                className="rounded-full w-8 inline"
              />
              <span className="font-medium text-sm ml-2">user123</span>
            </a>
          </div>
          <div>
            <a onClick={() => setIsModelOpen(true)}>
              <FontAwesomeIcon icon="ellipsis" />
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1668573347542-82ccfd2965fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          alt=""
          className="w-100"
        />
        <div className="p-3 flex flex-row text-2xl">
          <div className="flex-1">
            <a
              href="/"
              className="mr-3 text-red-600 hover:text-red-400 cursor-pointer"
            >
              <FontAwesomeIcon icon="heart" />
            </a>
            <a
              onClick={() => setIsPostModalOpen(true)}
              className="mr-3 hover:text-gray-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={["far", "comment"]} />
            </a>
            <a href="/" className="hover:text-gray-500 cursor-pointer">
              <FontAwesomeIcon icon={["far", "paper-plane"]} />
            </a>
          </div>
          <div className="">
            <a href="/" className="cursor-pointer hover:text-gray-500">
              <FontAwesomeIcon icon={["far", "bookmark"]} />
            </a>
          </div>
        </div>
        <div className="font-medium text-sm px-3">2,000 likes</div>
        <div className="px-3 text-sm">
          <span className="font-medium">user321</span> "Where flowers blom so
          does hope." - Lady Bird Johnson
        </div>
        <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-2">
          1 day ago
        </div>
        <div className="p-3 flex flex-row border-t">
          <div className="flex items-center">
            <a href="/" className="text-2xl cursor-pointer">
              <FontAwesomeIcon icon={["far", "face-smile"]} />
            </a>
          </div>
          <div className="flex-1 pr-3 py-1">
            <input
              className="w-full px-3 py-1 text-sm outline-0"
              type="text"
              placeholder="Add a comment"
            />
          </div>
          <div className="flex items-center text-sm">
            <a href="/" className="text-sky-500 font-medium cursor-pointer">
              Post
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
