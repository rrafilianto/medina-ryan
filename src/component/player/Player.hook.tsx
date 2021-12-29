import { useState } from "react";

const usePlayer = () => {
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

  return { isPlay, handlePlay, handleStop };
};

export default usePlayer;
