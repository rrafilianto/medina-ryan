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

      <div className="fixed bottom-4 right-4">
        {isPlay ? (
          <button type="button" onClick={handleStop}>
            <PauseCircle className="text-3xl opacity-40" />
          </button>
        ) : (
          <button type="button" onClick={handlePlay}>
            <PlayCircle className="text-3xl opacity-40" />
          </button>
        )}
      </div>
    </>
  );
};

export default Player;
