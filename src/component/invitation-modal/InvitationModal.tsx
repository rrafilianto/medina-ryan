import React, { useState, useEffect } from "react";
import { Envelope, MusicNote } from "react-bootstrap-icons";
import queryString from "query-string";

import "./_InvitationModal.css";

interface InvitationModalProps {
  handlePlay: () => void;
}

const InvitationModal = ({ handlePlay }: InvitationModalProps) => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    const inviteName = queryString.parse(window.location.search);
    if (inviteName?.to) {
      const str = inviteName.to.toString();

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
      className="invitation page-width z-10 text-gray-100"
    >
      <div className="modal-background-image">
        <div className="flex justify-center items-center text-center h-screen">
          <div>
            <p className="text-3xl font-semibold mb-20">MEDINA & RYAN</p>
            <p className="mb-6">to Mr/Mrs/Brother/Sister</p>
            <p className="text-3xl font-semibold capitalize">{name}</p>
            <p className="mt-6">Invite you to celebrate at our wedding</p>
            <button
              className="rounded button-white mt-24 px-24 py-3"
              onClick={handleClose}
            >
              <div className="flex items-center text-gray-800">
                <Envelope className="mr-2" />
                <p>Open Invitation</p>
              </div>
            </button>
            <div className="flex justify-center items-center mt-10">
              <MusicNote className="mr-2" />
              <p>Aiana Grande & Justin Bieber - Stuck with U</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationModal;
