import React, { useState } from "react";
import { message, Modal } from "antd";
import { Clipboard } from "react-bootstrap-icons";
import LazyLoad from "react-lazyload";

import "./_Envelope.css";

const Envelope = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleCopyClipboard = (type: string) => {
    type === "dana"
      ? navigator.clipboard.writeText("081322211403")
      : navigator.clipboard.writeText("4360103540");

    message.success("Account Number is copied");
  };

  return (
    <div className="px-8 py-14 background-envelope text-gray-100">
      <p className="text-center">
        Your presence and prayer for our wedding is the greatest gift we could
        ask for. No other gifts are needed or expected. Nevertheless, we would
        be honored to receive any gift and have provided the means to make it
        easier for you. Thank you.
      </p>

      <div className="text-center mt-8">
        <button
          className="button-white px-4 py-2"
          onClick={() => setIsModalVisible(true)}
        >
          <div className="flex items-center text-gray-800 text-xs">
            View Account Number
          </div>
        </button>
      </div>

      <Modal
        footer={null}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        style={{ top: "19%" }}
      >
        <div className="my-12">
          <div>
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
                className="button-black px-4 py-2"
                onClick={() => handleCopyClipboard("dana")}
              >
                <div className="flex items-center text-gray-100 text-xs">
                  <Clipboard className="mr-2" /> Copy Account Number
                </div>
              </button>
            </div>
          </div>

          <div className="mt-10">
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
                className="button-black px-4 py-2"
                onClick={() => handleCopyClipboard("bca")}
              >
                <div className="flex items-center text-gray-100 text-xs">
                  <Clipboard className="mr-2" /> Copy Account Number
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Envelope;
