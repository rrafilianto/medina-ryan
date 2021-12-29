import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
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
    const modal = document?.getElementById?.("invitation-modal");
    modal?.setAttribute("style", "display: none");
    handlePlay();
  };

  return (
    <LazyLoad>
      <div id="invitation-modal" className="modal page-width">
        <div className="modal-content text-center rounded-lg">
          <div className="my-5">
            <p className="text-2xl font-semibold mb-12">Medina & Ryan</p>
            <p className="mb-3">to Mr/Mrs/Brother/Sister</p>
            <p className="text-2xl font-semibold capitalize">{name}</p>
            <p className="mt-7">Invite you to celebrate at our wedding</p>
            <button
              className="rounded button-red mt-16 px-6 py-2"
              onClick={handleClose}
            >
              Open Invitation
            </button>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default InvitationModal;
