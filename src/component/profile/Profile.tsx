import React from "react";
import LazyLoad from "react-lazyload";
import { InstagramOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div className="px-8 py-14">
      <p className="border-b border-red mx-16 pb-4 text-2xl font-medium text-center">
        OUR WEDDING
      </p>

      <div className="mt-12 flex justify-around items-center">
        <LazyLoad height={200}>
          <img
            alt="Medina Aulia"
            src="https://i.ibb.co/mvCg7cv/XXXzTX.png"
            className="w-28 border-2 rounded-full"
          />
        </LazyLoad>
        <div className="ml-5">
          <p className="text-lg font-medium">MEDINA AULIA</p>
          <div className="flex items-center mb-3">
            <InstagramOutlined />
            <p className="font-chasing ml-1">@medinaauliaa</p>
          </div>
          <p>Daughter of</p>
          <p>Mr. Blablabla and Mrs. Blablabla</p>
        </div>
      </div>

      <div className="pt-5 flex justify-between items-center mt-3">
        <div className="text-right mr-5">
          <p className="text-lg font-medium">RYAN RAFILIANTO</p>
          <div className="flex justify-end items-center mb-3">
            <InstagramOutlined />
            <p className="font-chasing ml-1">@rrafilianto</p>
          </div>
          <p>Son of</p>
          <p>Mr. Blablabla and Mrs. Blablabla</p>
        </div>
        <LazyLoad height={200}>
          <img
            alt="Ryan Rafilianto"
            src="https://i.ibb.co/2tgnqZJ/XXXfR9.png"
            className="w-28 border-2 rounded-full"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Profile;
