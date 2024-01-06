import React, { useEffect, useState } from 'react'
import moment from "moment";
import { Pause, Play,SkipForward,SkipBack} from "lucide-react";

export default function Controls({index,sound,setTrack,number,setNumber,setIsPlaing,isPlaing}) {
const [time,setTime] = useState(0)
    function PlaySound () {
        if (isPlaing) {
          setIsPlaing(false);
          sound.pause();
        } else {
          setIsPlaing(true);
          sound.play();
        }
      }
      useEffect(()=> {
        const timeopdite = () => {
          setTime(sound.currentTime);
        }
        sound?.addEventListener("timeupdate",timeopdite);
        return () => {
        sound?.removeEventListener("timeupdate",timeopdite);
        }
      },[time,isPlaing])
  return (
    <div className="flex flex-col justify-center w-[60%] items-center">
       <div className="flex items-center gap-4">

        <button onClick={() => {
          if(number < 0) {
            return
          }
            setNumber((n) => {
              n = n - 1
              setTrack(index.items[n])
              sound.src = index.items[n].track.preview_url
              setIsPlaing(true)
              sound.play()
              return n
            })     
          } } className="hover:bg-white/10 rounded-full p-[10px]">{<SkipBack/>}</button>
        <button className="transition-all" onClick={PlaySound}>{isPlaing ? <Pause color="white" size={40} className="bg-white/10 rounded-full duration-200 hover:scale-110 p-[10px]" /> : <Play color="white" size={40} className="bg-white/10 pr-[6px]  duration-200  hover:scale-110 rounded-full p-[10px]" />}</button>
        <button onClick={() => {
          if(number >= index.items.length) {
            return
          }
            setNumber((n) => {
              n = n + 1
              setTrack(index.items[n])
              sound.src = index.items[n].track.preview_url
              setIsPlaing(true)
              sound.play()
              return n
            })
          } } className="hover:bg-white/10 rounded-full p-[10px]">{<SkipForward/>}</button>
       </div>
        <div className="flex items-center justify-center  w-[100%]">
          <span className="w-[35px]">
            {moment.utc(sound?.currentTime*1000 ? sound?.currentTime*1000 : 0).format('m:ss')}
          </span>
          <input

            id="range"
            type="range"
            onInput={(e) => {
              sound.currentTime = e.target.value;
            }}
            min={0}
            max={isNaN(sound?.duration) ? 0 : sound.duration}
            step={0.01}
            value={time}
            className=" mx-[15px] w-[50%] cursor-pointer h-[3px]"
          />
          <span className="w-[34px]">{moment.utc(sound?.duration*1000 ? sound?.duration*1000: 0).format('m:ss')}</span>
        </div>
      </div>
  )
}
