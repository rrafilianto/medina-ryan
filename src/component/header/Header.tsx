import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

import { countDown, covertQueryString } from "../../utils";
import "./_Header.css";

interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Header = () => {
  const [time, setTime] = useState<Time>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    countDown("2022-02-06T14:00:00", setTime);
  }, []);

  const handleSaveTheDate = () => {
    const data = {
      text: "Medina and Ryan Wedding - Invitation Wedding",
      dates: "20220206T180000/20220206T200000",
      details:
        "Thank you for saving our wedding date. We look forward to your presence.",
      location:
        "Kopi Pontis, Jalan Simpang, Balekambang, Sukabumi Regency, Jawa Barat",
    };

    const url = `https://calendar.google.com/calendar/r/eventedit?${covertQueryString(
      data
    )}`;

    window.open(url, "_blank");
  };

  return (
    <LazyLoad>
      <div className="bg-fixed background-image">
        <div className="flex justify-center items-center text-center h-screen">
          <div>
            <p className="text-3xl font-medium">MEDINA AULIA</p>
            <p className="text-3xl font-medium mb-1">RYAN RAFILIANTO</p>
            <p className="mb-10">WE'RE GETTING MARRIED</p>
            <p>Sunday, 06 February 2022</p>
            <div className="mt-4">
              <div className="border-t border-gray-300 mb-2 mx-8" />
              <div className="mx-10 grid grid-cols-4 gap-x-6">
                <p className="font-medium text-base">{time.days}</p>
                <p className="font-medium text-base">{time.hours}</p>
                <p className="font-medium text-base">{time.minutes}</p>
                <p className="font-medium text-base">{time.seconds}</p>
                <p className="text-mini">Days</p>
                <p className="text-mini">Hours</p>
                <p className="text-mini">Minutes</p>
                <p className="text-mini">Seconds</p>
              </div>
              <div className="border-b border-gray-300 mt-2 mx-8" />
            </div>
            <button
              className="rounded button-red mt-16 px-6 py-2"
              onClick={handleSaveTheDate}
            >
              Save Date to Google Calendar
            </button>
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Header;
