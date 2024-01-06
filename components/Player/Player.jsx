"use client";
import { useContext, useEffect} from "react";
import SoundVolume from "./SoundVolume";
import Controls from "./Controls";
import TrackCart from "./TrackCart";
import { DataContext } from "@/components/DataProviders";


export default function Player() {

  const { sound,index,isPlaing,setIsPlaing, track, setTrack, setNumber, number } = useContext(DataContext)
    useEffect(() => {
      function nextsoungs() {
        setNumber((n) => {
           n++
          if(n >= index.items.length) {
            n = 0
            setTrack(index.items[0])
            sound.src = index.items[0].track.preview_url
            setIsPlaing(true)
            sound.play()
            return n;
          } else {
            setTrack(index.items[n])
            sound.src = index.items[n].track.preview_url
            setIsPlaing(true)
            sound.play()
            return n
          }
        })
      }
      sound?.addEventListener("ended",nextsoungs );
      return () => {
      sound?.removeEventListener("ended",nextsoungs );
      }
   
    },[track])
  return (
    <div className="flex w-full rounded-xl px-[30px] justify-center  py-[20px] bg-black/60 backdrop-blur-lg">
        <TrackCart isPlaing={isPlaing} track={track}/>
        <Controls index={index} sound={sound} setTrack={setTrack} number={number} setNumber={setNumber} setIsPlaing={setIsPlaing} isPlaing={isPlaing}/>
        <SoundVolume sound={sound} />
    </div>
  );
}
