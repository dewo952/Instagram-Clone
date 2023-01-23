/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DialogModal from "./DialogModal";

const PostDialogModal = (props) => {
  return (
    <DialogModal {...props} size="xs">
      <ul className="w-full text-sm">
        <li>
          <a className="border-b text-center text-red-600 py-3 block">Report</a>
        </li>
        <li>
          <a className="border-b text-center text-red-600 py-3 block">
            Unfollow
          </a>
        </li>
        <li>
          <a className="border-b text-center py-3 block">Go to Post</a>
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

export default PostDialogModal;
