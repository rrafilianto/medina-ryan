import React from "react";
import LazyLoad from "react-lazyload";

import "./_InvitationModal.css";

const InvitationModal = () => {
  const handleClose = (): void => {
    const modal = document?.getElementById?.("invitation-modal");
    modal?.setAttribute("style", "display: none");
  };

  return (
    <LazyLoad>
      <div id="invitation-modal" className="modal page-width">
        <div className="modal-content text-center rounded-lg">
          <div className="my-5">
            <p className="text-2xl font-semibold mb-12">Medina & Ryan</p>
            <p className="mb-3">to Mr/Mrs/Brother/Sister</p>
            <p className="text-2xl font-semibold">Angga & Dian</p>
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
