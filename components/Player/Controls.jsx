'use client'
import React from 'react'
import clsx from 'clsx';
import { Pause, Play,SkipForward,SkipBack,Repeat} from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import {setTrackBack,playsong, selectTrack,setTrackNext,setRepeat} from '../../store/features/counter/counterSlice'
import TimePlayer from './TimePlayer'
export default function Controls({sound}) {
  const track = useSelector(selectTrack)
  const dispath = useDispatch()
  function BackSong() {
      if(track.track_id < 0) {
        return
      }
      dispath(setTrackBack({
          sound,
        }))
  } 
  function PlaySound() {
    dispath(playsong({
      sound
    }))
    
  }
  function NextSong() {
    dispath(setTrackNext({
     sound:sound
    }))
  } 
    

  return (
    <div className="flex flex-col justify-center w-[60%] items-center">
       <div className="flex items-center gap-4">
        <button onClick={BackSong} className="hover:bg-white/10 rounded-full p-[10px]">{<SkipBack/>}</button>
        <button className="transition-all" onClick={PlaySound}>{track.track_isPlaing ? <Pause color="white" size={40} className="bg-white/10 rounded-full duration-200 hover:scale-110 p-[10px]" /> : <Play color="white" size={40} className="bg-white/10 pr-[6px]  duration-200  hover:scale-110 rounded-full p-[10px]" />}</button>
        <button onClick={NextSong} className="hover:bg-white/10 rounded-full p-[10px]">{<SkipForward/>}</button>
        <button className={track.repeat ? "text-green-500" : "text-white"} onClick={() => {
          dispath(setRepeat())
        }}><Repeat /></button>
       </div>
        <div className="flex items-center justify-center  w-[100%]">
         
          <TimePlayer sound={sound} track={track} />
          
        </div>
      </div>
  )
}
