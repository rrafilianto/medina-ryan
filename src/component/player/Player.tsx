import React, { useState } from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

interface PlayerProps {
  url: string;
}

const Player = ({ url }: PlayerProps) => {
  const [isPlay, setIsPlay] = useState(true);
  const audio: any = document?.getElementById?.("audio");

  const handlePlay = () => {
    audio?.play();
    setIsPlay(true);
  };

  const handleStop = () => {
    audio?.pause();
    setIsPlay(false);
  };

  return (
    <>
      <audio id="audio" loop>
        <source src={url} type="audio/mp3" />
      </audio>

      <div className="fixed bottom-10 left-8">
        {isPlay ? (
          <button type="button" onClick={handleStop}>
            <PauseCircleOutlined className="text-gray-400 text-3xl opacity-70" />
          </button>
        ) : (
          <button type="button" onClick={handlePlay}>
            <PlayCircleOutlined className="text-gray-400 text-3xl opacity-70" />
          </button>
        )}
      </div>
    </>
  );
};

export default Player;
