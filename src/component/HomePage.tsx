import React, { useState, useEffect } from "react";

import InvitationModal from "./invitation-modal";
import Header from "./header";
import Profile from "./profile";
import Time from "./time";
import Location from "./location";
import Photo from "./photo";
import Player from "./player";
import Envelope from "./envelope";
import Forum from "./forum";

import "./_HomePage.css";
import music from "./../audio/stuck-with-u.mp3";

const HomePage = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>();

  useEffect(() => {
    setAudio(document?.getElementById?.("audio"));

    const htmlElement = document.querySelector("body");
    htmlElement?.setAttribute("style", " overflow-y: hidden");

    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 1000);
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
    <div className="text-gray-800">
      <InvitationModal handlePlay={handlePlay} />

      <Player
        url={music}
        isPlay={isPlay}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />

      <Header />

      <div className="bg-fixed home-background-image">
        <Profile />

        <Time />

        <Location />

        <Photo />

        <Envelope />

        <Forum />
      </div>
    </div>
  );
};

export default HomePage;
