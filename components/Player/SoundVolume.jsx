'use client'
import React, {use, useRef,useState} from "react";
import {VolumeX, Volume2,Volume1} from "lucide-react";
import {setVolume} from '../../store/features/counter/counterSlice'
import { useDispatch } from 'react-redux';
import { useAudio } from "../AudioProvider";
import { useTrack } from "../../hooks/useTrack";
export default function SoundVolume() {
  const ref = useRef(null)
  const {sound} = useAudio()
  const [isVolume, setIsVolume] = useState(true);
  const dispath = useDispatch()
  const {track} = useTrack()
  function volume() {
    if(isVolume) {
      setIsVolume(false)
      sound.volume = 0
    } else {
      setIsVolume(true)
      sound.volume = track?.volume
    }
  }
  return (
    <div className="flex self-center gap-2 w-[300px]">
      <button
        className=" p-[10px] rounded-full hover:bg-white/10 transition-colors flex justify-center"
        onClick={volume}
      >
        {track?.volume < .05 ? (
          <VolumeX />
        ) : track?.volume <= 0.5 ? (
          <Volume1 />
        ) : (
          <Volume2 />
        )}
      </button>
      <input
        ref={ref}
        className="h-[1px] w-[100px] my-auto cursor-pointer"
        min={0.00}
        max={100}
        defaultValue={track.volume * 100}
        onInput={(e) => {
          dispath(setVolume({
            volume:e.target.value / 100,
          }))
          sound.volume = track.volume
          setIsVolume(true);
        }}
        type="range"
      />
      
    </div>
  );
}
