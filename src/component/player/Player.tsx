import React from "react";
import { PlayCircle, PauseCircle } from "react-bootstrap-icons";

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

      <div className="fixed bottom-10 right-8">
        {isPlay ? (
          <button type="button" onClick={handleStop}>
            <PauseCircle className="color-green text-3xl opacity-80" />
          </button>
        ) : (
          <button type="button" onClick={handlePlay}>
            <PlayCircle className="color-green text-3xl opacity-80" />
          </button>
        )}
      </div>
    </>
  );
};

export default Player;
