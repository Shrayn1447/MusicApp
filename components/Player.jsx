"use client";
import clsx from "clsx";
import { Pause, Play,VolumeX, Volume2,Volume1,ArrowBigRight,ArrowBigLeft} from "lucide-react";
import { useContext } from "react";
import { DataContext } from "@/app/page";
export default function Player() {
  
  const {sound,index,isPlaing,setIsPlaing,time,setTime,volume,setVolume,isVolume,setIsVolume, track, setTrack, setNumber, number} = useContext(DataContext)
  sound.addEventListener("timeupdate", () => {
    setTime(sound.currentTime);
  });
  sound.addEventListener('volumechange', () => {
    setVolume(sound.volume * 100)
  })
  function PlaySound () {
    if (isPlaing) {
      setIsPlaing(false);
      sound.pause();
    } else {
      setIsPlaing(true);
      sound.play();
    }
  }
  function Volume() {
    if(isVolume) {
      setIsVolume(false)
      sound.volume = 0
    } else {
      setIsVolume(true)
      sound.volume = 1
    }
  }
  return (
    <div className="flex w-full fixed bottom-0 py-[20px] bg-black justify-center mt-[200px] gap-[40px] ">
      <div>
        <img className={clsx("", {
          'animate-none':!isPlaing
        })} src={track?.track?.album?.images[2].url} alt="Logo" />
      </div>
      <div className="flex flex-col items-center">
       <div className="flex items-center gap-4">
        <button onClick={() => {
          if(number < 0) {
            return
          }
            setNumber((n) => {
              n = n - 1
              setTrack(index.items[n])
              sound.pause()
              sound.src = index.items[n].track.preview_url
              setIsPlaing(true)
              sound.play()
              return n
            })
          
          } } className="hover:bg-white/10 rounded-full p-[10px]">{<ArrowBigLeft/>}</button>
        <button onClick={PlaySound}>{isPlaing ? <Pause color="white" size={40} className="hover:bg-white/10 rounded-full p-[10px]" /> : <Play color="white" size={40} className="hover:bg-white/10 rounded-full p-[10px]" />}</button>
        <button onClick={() => {
          if(number >= index.items.length) {
            return
          }
            setNumber((n) => {
              n = n + 1
              setTrack(index.items[n])
              sound.pause()
              sound.src = index.items[n].track.preview_url
              setIsPlaing(true)
              sound.play()
              return n
            })
          
          return 
          } } className="hover:bg-white/10 rounded-full p-[10px]">{<ArrowBigRight/>}</button>
       </div>
        <div className="flex items-center">
          <span className="w-[35px]">
            {(Math.round(sound.currentTime) / 100).toFixed(0)}:
            {`${Math.round(sound.currentTime).toFixed(0) <= 9 ? `0${Math.round(sound.currentTime).toFixed(0)}`:Math.round(sound.currentTime).toFixed(0)}`}
          </span>
          <input
            id="range"
            type="range"
            onInput={(e) => {
              sound.currentTime = e.target.value;
              
            }}
            min={0}
            max={isNaN(sound.duration)? 0 : sound.duration}
            step={0.001}
            value={time}
            className="w-[300px] mx-[15px] my-auto h-[3px] cursor-pointer"
          />
          <span>{`0:${isNaN((Math.round(sound.duration)))? '00':(Math.round(sound.duration))}`}</span>
        </div>
      </div>
      <div className="flex self-end gap-2">
        <button className=" p-[10px] rounded-full hover:bg-white/10 transition-colors flex justify-center" onClick={Volume}>{sound.volume === 0 ? <VolumeX/> : sound.volume <= 0.5 ? <Volume1/> : <Volume2/>}</button>
        <input
        volume={volume}
        className="h-[1px] w-[100px] my-auto cursor-pointer"
        min="0"
        max="100"
        onInput={(e) => {
          sound.volume = e.target.value / 100;
          setIsVolume(true)
          if(sound.volume === 0) {
            setIsVolume(false)
          }
        }}
        type="range"
        />
      </div>
    </div>
  );
}
