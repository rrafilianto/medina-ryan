import React from "react";
import { CalendarEvent, Clock } from "react-bootstrap-icons";

const Time = () => {
  return (
    <div className="px-8 py-14 text-center">
      <p className="border-b border-t border-black py-4 text-2xl font-medium text-center">
        WEDDING TIME
      </p>

      <div className="mt-12">
        <p className="text-lg font-medium">AKAD NIKAH</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarEvent className="mr-2" />
          <p>Sunday, February 06, 2021</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <Clock className="mr-2" />
          <p>14.00 WIB - 16.00 WIB</p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg font-medium">WEDDING CEREMONY</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarEvent className="mr-2" />
          <p>Sunday, February 06, 2021</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <Clock className="mr-2" />
          <p>18.00 WIB - 21.00 WIB</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
