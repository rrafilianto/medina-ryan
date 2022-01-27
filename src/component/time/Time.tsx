import React, { useState, useEffect } from "react";
import { CalendarEvent, Clock } from "react-bootstrap-icons";
import { Divider } from "antd";

import { countDown, covertQueryString } from "../../utils";

interface ITime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Time = () => {
  const [time, setTime] = useState<ITime>({
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
      dates: "20220206T180000/20220206T210000",
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
    <div className="px-8 py-14 text-center">
      <Divider>WEDDING TIME</Divider>

      <div className="mt-12">
        <p className="text-base font-medium">AKAD NIKAH</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarEvent className="mr-2" />
          <p>Sunday, February 06, 2022</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <Clock className="mr-2" />
          <p>14.00 WIB - 16.00 WIB</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-base font-medium">WEDDING CEREMONY</p>
        <div className="flex justify-center items-center mt-3">
          <CalendarEvent className="mr-2" />
          <p>Sunday, February 06, 2022</p>
        </div>
        <div className="flex justify-center items-center mt-1">
          <Clock className="mr-2" />
          <p>18.00 WIB - 21.00 WIB</p>
        </div>
      </div>

      <div className="mt-16">
        <p className="mb-4 font-primary">Counting down to the big day</p>
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
      </div>
      <button
        className="button-black mt-10 px-6 py-2"
        onClick={handleSaveTheDate}
      >
        <div className="flex items-center text-gray-100">
          <CalendarEvent className="mr-2" />
          <p>Save Date to Calendar</p>
        </div>
      </button>
    </div>
  );
};

export default Time;
