/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DialogModal from "./DialogModal";

const PostInLargeModal = (props) => {
  const { open, setOpen } = props;
  return (
    <DialogModal open={open} setOpen={setOpen} size="lg">
      <div className="flex flex-row h-full">
        <div className="w-3/5">
          <img
            src="https://images.unsplash.com/photo-1668573347542-82ccfd2965fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            alt="BigPost"
          />
        </div>
        <div className="w-2/5 relative pt-16">
          <div className="absolute top-0 w-full p-3 flex flex-row border-b">
            <div className="flex-1">
              <a>
                <img
                  className="rounded-full w-8 max-w-none inline"
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                />
                <span className="font-medium text-sm ml-2">user123</span>
              </a>
            </div>
            <div className="cursor-pointer">
              <FontAwesomeIcon icon="ellipsis" />
            </div>
          </div>

          <div className="overflow-scroll h-full pb-48">
            <div className="flex flex-row p-3">
              <div>
                <img
                  className="rounded-full w-8 max-w-none inline"
                  src="https://randomuser.me/api/portraits/women/4.jpg"
                />
              </div>
              <div className="px-3 text-sm">
                <span className=" font-medium mr-2">user123</span>"Where flowers
                blom so does hope." - Lady Bird Johnson.
              </div>
              <a className="text-xs cursor-pointer">
                <FontAwesomeIcon icon={["far", "heart"]} />
              </a>
            </div>

            <div className="flex flex-row p-3">
              <div>
                <img
                  className="rounded-full w-8 max-w-none inline"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                />
              </div>
              <div className="grow relative">
                <div className="px-3 text-sm">
                  <span className="font-medium mr-2">useeee234</span>I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.    ,   I know that somehow, every step I took since the moment I could walk was a step towards finding you.
                </div>
                <a className="absolute top-0 right-0 block float-right text-xs cursor-pointer text-red-600">
                  <FontAwesomeIcon icon="heart" />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full border-t bg-white">
            <div className="p-3 flex flex-row text-2xl w-full">
              <div className="flex-1">
                <a className="mr-3 text-red-600 hover:text-red-400 cursor-pointer">
                  <FontAwesomeIcon icon="heart" />
                </a>
                <a className="mr-3 hover:text-gray-500 cursor-pointer">
                  <FontAwesomeIcon icon={["far", "comment"]} />
                </a>
                <a className="hover:text-gray-500 cursor-pointer">
                  <FontAwesomeIcon icon={["far", "paper-plane"]} />
                </a>
              </div>
              <div className="">
                <a className="cursor-pointer hover:text-gray-500">
                  <FontAwesomeIcon icon={["far", "bookmark"]} />
                </a>
              </div>
            </div>
            <div className="font-medium text-sm px-3">2,000 likes</div>
            <div className="text-gray-500 uppercase px-3 text-xs tracking-wide my-3">
              1 Day Ago
            </div>
            <div className="p-3 flex flex-row border-t">
              <div className="flex items-center">
                <a className="text-2xl">
                  <FontAwesomeIcon icon={["far", "face-smile"]} />
                </a>
              </div>
              <div className="flex-1 pr-3 py-1">
                <input
                  className=" w-full px-3 py-1 text-sm outline-0"
                  type="text"
                  placeholder="Add a comment..."
                />
              </div>
              <div className="flex items-center text-sm">
                <a className="text-sky-500 font-medium cursor-pointer">Post</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DialogModal>
  );
};

export default PostInLargeModal;
