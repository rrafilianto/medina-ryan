import React from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

interface PlayerProps {
  url: string;
  isPlay: boolean;
  handlePlay: () => void;
  handleStop: () => void;
}

const Player = ({ url, isPlay, handlePlay, handleStop }: PlayerProps) => {
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
