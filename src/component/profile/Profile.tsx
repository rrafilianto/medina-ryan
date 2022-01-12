import React from "react";
import LazyLoad from "react-lazyload";
import { Instagram } from "react-bootstrap-icons";

const Profile = () => {
  return (
    <div className="px-8 py-14">
      <p className="border-b border-black mx-28 pb-4 text-2xl font-medium text-center">
        OUR
      </p>

      <div className="mt-12 flex justify-center items-center">
        <LazyLoad height={200}>
          <img
            alt="Medina Aulia"
            src="https://i.ibb.co/C5NKCqY/bride.png"
            className="w-28 border-2 rounded-full border-black"
          />
        </LazyLoad>
        <div className="ml-5">
          <p className="text-lg font-medium">MEDINA AULIA</p>
          <a
            href="https://www.instagram.com/medinaauliaa"
            target="_blank"
            rel="noreferrer"
            className="flex items-center mb-3"
          >
            <Instagram />
            <p className="ml-1">@medinaauliaa</p>
          </a>
          <p>Daughter of</p>
          <p>Mr. A. Alamsyah Bariji and Mrs. Sri Wahyuni</p>
        </div>
      </div>

      <div className="pt-5 flex justify-center items-center mt-3">
        <div className="text-right mr-5">
          <p className="text-lg font-medium">RYAN RAFILIANTO</p>
          <a
            href="https://www.instagram.com/rrafilianto"
            target="_blank"
            rel="noreferrer"
            className="flex justify-end items-center mb-3"
          >
            <Instagram />
            <p className="ml-1">@rrafilianto</p>
          </a>
          <p>Son of</p>
          <p>Mr. Mukiran and Mrs. Sutati</p>
        </div>
        <LazyLoad height={200}>
          <img
            alt="Ryan Rafilianto"
            src="https://i.ibb.co/3h1Nf8M/groom.png"
            className="w-28 border-2 rounded-full border-black"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Profile;
