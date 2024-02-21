"use client";
import { useEndSong } from "../../hooks/useEndSong"
import SoundVolume from "./SoundVolume";
import Controls from "./Controls";
import TrackCart from "./TrackCart";
export default function Player() {
  useEndSong()
  return (
    <div className="flex w-full rounded-xl px-[30px] justify-center  py-[10px] bg-black/60 backdrop-blur-lg">
      <TrackCart />
      <Controls/>
      <SoundVolume />
    </div>
  );
}
