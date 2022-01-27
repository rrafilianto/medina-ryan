import React from "react";
import { HeartFill } from "react-bootstrap-icons";
import LazyLoad from "react-lazyload";

import "./_Footer.css";

const Footer = () => {
  return (
    <div className="px-8 py-5 background-black text-gray-100">
      <div className="text-center">
        <div className="flex justify-center items-center text-mini mb-3">
          Made with <HeartFill className="mx-1 color-red" /> by
        </div>
        <LazyLoad height={200}>
          <img
            alt="Medina & Ryan"
            src="https://i.ibb.co/7C94mgR/logo-white.png"
            className="max-h-6"
            style={{ margin: "auto" }}
          />
        </LazyLoad>
        <p className="mt-3 text-mini">Medina & Ryan Weeding</p>
      </div>
    </div>
  );
};

export default Footer;
