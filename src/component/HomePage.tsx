import React, { useState, useEffect } from "react";

import InvitationModal from "./invitation-modal";
import Header from "./header";
import Profile from "./profile";
import Time from "./time";
import Location from "./location";
import Photo from "./photo";
import Player from "./player";
import music from "./../audio/stuck-with-u.mp3";
import Envelope from "./envelope";
import Forum from "./forum";

const HomePage = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>();

  useEffect(() => {
    setAudio(document?.getElementById?.("audio"));
  }, []);

  const handlePlay = () => {
    audio?.play();
    setIsPlay(true);
  };

  const handleStop = () => {
    audio?.pause();
    setIsPlay(false);
  };

  return (
    <div className="text-gray-300">
      <InvitationModal handlePlay={handlePlay} />

      <Player
        url={music}
        isPlay={isPlay}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />

      <Header />

      <Profile />

      <Time />

      <Location />

      <Photo />

      <Envelope />

      <Forum />
    </div>
  );
};

export default HomePage;
