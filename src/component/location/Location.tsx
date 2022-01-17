import React from "react";
import LazyLoad from "react-lazyload";
import { Map, PinMap } from "react-bootstrap-icons";

const Location = () => {
  const handleOpenMap = () => {
    const url = "https://goo.gl/maps/emwRipzgipJH6piVA";

    window.open(url, "_blank");
  };

  return (
    <div className="px-8 py-14 text-center">
      <p className="border-b border-t border-black py-4 text-2xl font-medium text-center">
        WEDDING VENUE
      </p>

      <div className="mt-12">
        <div className="text-xl flex justify-center items-center mb-3">
          <PinMap className="mr-2" />
          <p>Kopi Pontis & Halaman</p>
        </div>
        <p>
          Jl. Simpang, Balekambang, Kec. Nagrak, Sukabumi Regency, Jawa Barat
          43351
        </p>
      </div>

      <LazyLoad height={200}>
        <div className="flex justify-center items-center my-5 border-2 rounded border-black">
          <iframe
            title="Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.038452686459!2d106.80895831537507!3d-6.885997669296389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e683150128ac393%3A0xd17d94151d1c77e2!2sKopi%20Pontis!5e0!3m2!1sid!2sid!4v1627751882769!5m2!1sid!2sid"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </LazyLoad>

      <button
        className="rounded button-black px-6 py-2"
        onClick={handleOpenMap}
      >
        <div className="flex items-center text-gray-100">
          <Map className="mr-2" />
          <p>Open Google Map</p>
        </div>
      </button>
    </div>
  );
};

export default Location;
