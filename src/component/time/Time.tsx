import React from "react";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons";

const Time = () => {
  return (
    <div className="px-8 py-14 text-center">
      <p className="border-b border-red mx-16 pb-4 text-2xl font-medium text-center">
        WEDDING TIME
      </p>

      <div className="mt-12">
        <p className="text-lg font-medium">AKAD NIKAH</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarOutlined className="mr-2" />
          <p>Sunday, 06 February 2021</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <FieldTimeOutlined className="mr-2" />
          <p>15.00 WIB - 16.00 WIB</p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg font-medium">WEDDING CEREMONY</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarOutlined className="mr-2" />
          <p>Sunday, 06 February 2021</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <FieldTimeOutlined className="mr-2" />
          <p>18.00 WIB - 20.00 WIB</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
