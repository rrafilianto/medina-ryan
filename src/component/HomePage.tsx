import React from "react";

import InvitationModal from "./invitation-modal";
import Header from "./header";
import Profile from "./profile";
import Time from "./time";
import Location from "./location";
import Photo from "./photo";
import Player from "./player";
import music from "./../audio/beautiful-in-white.mp3";

const HomePage = () => {
  return (
    <div className="text-gray-300">
      {/* <InvitationModal /> */}
      <Player url={music} />

      <Header />

      <Profile />

      <Time />

      <Location />

      <Photo />
    </div>
  );
};

export default HomePage;
