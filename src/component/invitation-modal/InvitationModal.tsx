import React, { useState, useEffect } from "react";
import { Envelope } from "react-bootstrap-icons";
import queryString from "query-string";

import "./_InvitationModal.css";

interface InvitationModalProps {
  handlePlay: () => void;
}

const InvitationModal = ({ handlePlay }: InvitationModalProps) => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    const query = queryString.parse(window.location.search);
    if (query?.to) {
      const str = query.to.toString();

      const replace = str.replaceAll(" ", " & ");
      const newInviteName = replace.replaceAll("-", " ");
      setName(newInviteName);
    }
  }, []);

  const handleClose = (): void => {
    window.scrollTo({ top: 0 });
    const htmlElement = document.querySelector("body");
    htmlElement?.setAttribute("style", " overflow-y: scroll");

    const modal = document?.getElementById?.("invitation-modal");
    modal?.setAttribute(
      "style",
      "visibility: hidden; opacity: 0; transition: visibility 0.2s, opacity 0.2s linear;"
    );
    handlePlay();
  };

  return (
    <div
      id="invitation-modal"
      className="invitation page-width z-20 text-gray-100"
    >
      <div className="modal-background-image">
        <div className="flex justify-center items-center text-center h-screen">
          <div className="mx-10">
            <p className="text-3xl mb-20 font-primary">MEDINA & RYAN</p>
            <p className="mb-6">to Mr/Mrs/Brother/Sister</p>
            <p className="text-2xl capitalize font-semibold">{name}</p>
            <p className="mt-6">Invite you to celebrate at our wedding</p>
            <button
              className="button-white mt-24 px-24 py-3"
              onClick={handleClose}
            >
              <div className="flex items-center text-gray-800">
                <Envelope className="mr-2" />
                <p>Open Invitation</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationModal;
