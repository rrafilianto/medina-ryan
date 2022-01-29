import React from "react";

import "./_Header.css";

const Header = () => {
  return (
    <div className="background-image text-gray-100">
      <div className="flex justify-center items-end h-screen">
        <div className="text-center mb-28">
          <p className="text-3xl font-primary">MEDINA AULIA</p>
          <p className="text-3xl font-primary mb-16">RYAN RAFILIANTO</p>
          <div className="border-b border-t py-5 mx-10 font-primary">
            <p>Sunday</p>
            <p>February 06, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
