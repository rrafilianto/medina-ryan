import React from "react";
import { message } from "antd";
import { Clipboard } from "react-bootstrap-icons";
import LazyLoad from "react-lazyload";

const Envelope = () => {
  const handleCopyClipboard = (type: string) => {
    type === "dana"
      ? navigator.clipboard.writeText("081322211403")
      : navigator.clipboard.writeText("4360103540");

    message.success("Account Number is copied");
  };

  return (
    <div className="px-8 py-14">
      <p className="border-b-2 border-green mx-14 pb-4 text-2xl font-medium text-center">
        ENVELOPE DIGITAL
      </p>

      <div className="mt-12">
        <div className="flex justify-center">
          <LazyLoad height={200}>
            <img
              alt="Dana"
              src="https://i.ibb.co/LhWqXkx/dana.png"
              className="w-28"
            />
          </LazyLoad>
        </div>

        <div className="flex justify-center mt-3">
          <div className="text-right mr-3">
            <p>Account Number :</p>
            <p>Account Name :</p>
          </div>
          <div>
            <p>081322211403</p>
            <p>Dina Aulia</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            className="rounded button-green px-6 py-2"
            onClick={() => handleCopyClipboard("dana")}
          >
            <div className="flex items-center">
              <Clipboard className="mr-2" /> Copy Account Number
            </div>
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-center">
          <LazyLoad height={200}>
            <img
              alt="BCA"
              src="https://i.ibb.co/cvjJYyk/bca.png"
              className="w-28"
            />
          </LazyLoad>
        </div>

        <div className="flex justify-center mt-3">
          <div className="text-right mr-3">
            <p>Account Number :</p>
            <p>Account Name :</p>
          </div>
          <div>
            <p>4360103540</p>
            <p>Ryan Rafilianto</p>
          </div>
        </div>

        <div className="text-center mt-3">
          <button
            className="rounded button-green px-6 py-2"
            onClick={() => handleCopyClipboard("bca")}
          >
            <div className="flex items-center">
              <Clipboard className="mr-2" /> Copy Account Number
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
