import React from "react";

const Location = () => {
  const handleOpenMap = () => {
    const url = "https://goo.gl/maps/emwRipzgipJH6piVA";

    window.open(url, "_blank");
  };

  return (
    <div className="px-8 py-14 text-center">
      <p className="border-b border-red mx-14 pb-4 text-2xl font-medium text-center">
        WEDDING VENUE
      </p>

      <div className="mt-12">
        <p className="text-lg font-chasing">Kopi Pontis</p>
        <p>
          Jl. Simpang, Balekambang, Kec. Nagrak, Sukabumi Regency, Jawa Barat
          43351
        </p>
      </div>

      <div className="flex justify-center items-center my-5">
        <iframe
          title="Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.038452686459!2d106.80895831537507!3d-6.885997669296389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e683150128ac393%3A0xd17d94151d1c77e2!2sKopi%20Pontis!5e0!3m2!1sid!2sid!4v1627751882769!5m2!1sid!2sid"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <button className="rounded button-red px-6 py-2" onClick={handleOpenMap}>
        Open Google Map
      </button>
    </div>
  );
};

export default Location;