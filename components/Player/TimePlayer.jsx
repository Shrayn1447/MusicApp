'use client'
import React,{useEffect,useState} from 'react'
import moment from "moment";
export default function TimePlayer({track,sound}) {
    const [time,setTime] = useState(0)
    useEffect(() => {
        const timeopdite = () => {
          setTime(sound.currentTime);
        }
        sound?.addEventListener("timeupdate",timeopdite);
        return () => {
        sound?.removeEventListener("timeupdate",timeopdite);
        }
      },[track])
  return (
    <>
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
  </>
  )
}
