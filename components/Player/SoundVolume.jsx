import React, {useState} from "react";
import {VolumeX, Volume2,Volume1} from "lucide-react";
export default function SoundVolume({sound}) {
  const [isVolume, setIsVolume] = useState(true);
  const [volume,setVolume] = useState(0)
  function Volume() {
    if(isVolume) {
      setIsVolume(false)
      sound.volume = 0
    } else {
      setIsVolume(true)
      sound.volume = volume
    }
  }
  return (
    <div className="flex self-center gap-2 w-[300px]">
      <button
        className=" p-[10px] rounded-full hover:bg-white/10 transition-colors flex justify-center"
        onClick={Volume}
      >
        {sound?.volume === 0 ? (
          <VolumeX />
        ) : sound?.volume <= 0.5 ? (
          <Volume1 />
        ) : (
          <Volume2 />
        )}
      </button>
      <input
        className="h-[1px] w-[100px] my-auto cursor-pointer"
        min="0"
        max="100"
        volume={volume}
        onInput={(e) => {
          sound.volume = e.target.value / 100;
          setVolume(e.target.value / 100)
          setIsVolume(true);
          if (sound.volume === 0) {
            setIsVolume(false);
          }
        }}
        type="range"
      />
      
    </div>
  );
}
