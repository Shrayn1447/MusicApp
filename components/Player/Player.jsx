"use client";
import { useEffect } from "react";
import SoundVolume from "./SoundVolume";
import { useAudio } from "../AudioProvider";
import Controls from "./Controls";
import TrackCart from "./TrackCart";
import { useSelector, useDispatch } from 'react-redux'
import { songisover, selectTrack } from '../../store/features/counter/counterSlice'
export default function Player() {
  const {sound} = useAudio()
  const dispatch = useDispatch()
  const track = useSelector(selectTrack)
  useEffect(() => {
    function nextsoungs() {
      dispatch(songisover({sound:sound}))
    }
    sound?.addEventListener("ended", nextsoungs);
    return () => {
      sound?.removeEventListener("ended", nextsoungs);
    };
  }, [track.track]);
  return (
    <div className="flex w-full rounded-xl px-[30px] justify-center  py-[10px] bg-black/60 backdrop-blur-lg">
      <TrackCart />
      <Controls
        
        sound={sound}
      />
      <SoundVolume sound={sound} track={track} />
    </div>
  );
}
