'use client'
import React,{useEffect,useState} from 'react'
import moment from "moment";
export default function TimePlayer({sound}) {
    const [time,setTime] = useState(0)
    const timeopdite = () => {
      setTime(sound.currentTime);
    }
    useEffect(() => {
        sound?.addEventListener("timeupdate",timeopdite);
        return () => {
        sound?.removeEventListener("timeupdate",timeopdite);
        }
      },[])
  return (
    <>
    <span className="w-[35px] text-[14px] text-white/60">
    {moment.utc(sound?.currentTime*1000 ? sound?.currentTime*1000 : 0).format('m:ss')}
  </span>
    <input

    type="range"
    onChange={(e) => {
      sound.currentTime = e.target.value;
    }}
    min={0}
    max={isNaN(sound?.duration) ? 0 : sound.duration}
    step={0.01}
    value={time}
    className=" mx-[15px] w-[50%] cursor-pointer h-[3px]"
  />
  <span className="w-[34px] text-[14px] text-white/60">{moment.utc(sound?.duration*1000 ? sound?.duration*1000: 0).format('m:ss')}</span>
  </>
  )
}
