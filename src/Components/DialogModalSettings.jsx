/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DialogModal from "./DialogModal";

const DialogModalSettings = (props) => {
  return (
    <DialogModal {...props} size="xs">
      <ul className="w-full text-sm">
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Change Password
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Nametag
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Apps and Websites
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Notifications
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Edit Profile
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Report a problem
          </a>
        </li>
        <li>
          <a href="/" className="border-b text-center py-3 block">
            Log Out
          </a>
        </li>
        <li>
          <a
            onClick={() => props.setOpen()}
            className="border-b text-center py-3 block cursor-pointer"
          >
            Cancel
          </a>
        </li>
      </ul>
    </DialogModal>
  );
};

export default DialogModalSettings;
