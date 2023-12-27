"use client";
import clsx from "clsx";
import { Pause, Play,VolumeX,Music, Volume2,Volume1,SkipForward,SkipBack} from "lucide-react";
import { useContext, useEffect } from "react";
import { DataContext } from "@/components/DataProviders";
import moment from "moment";

export default function Player() {
  const { sound,index,isPlaing,setIsPlaing,time,setTime,volume,setVolume,isVolume,setIsVolume, track, setTrack, setNumber, number } = useContext(DataContext)
    useEffect(() => {
      const timeopdite = () => {
        setTime(sound.currentTime);
      }
      const volumeopdite = () => {
        setVolume(sound.volume * 100)
      }
      const nextsoungs = () => {
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
      sound?.addEventListener("timeupdate",timeopdite);
      sound?.addEventListener('volumechange', volumeopdite)
      sound?.addEventListener("ended",nextsoungs );
      
      return () => {
      sound?.removeEventListener("timeupdate",timeopdite);
      sound?.removeEventListener('volumechange', volumeopdite)
      sound?.removeEventListener("ended",nextsoungs );
      }
   
    },[time,volume,isPlaing])
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
    <div className="flex w-full rounded-xl px-[30px] col-span-full py-[20px] bg-black/60 backdrop-blur-lg justify-between ">
      <div className="flex justify-center items-center text-[14px] gap-[10px]" >
        {track ? <img className={clsx("animate-none rounded-full ", {
          'animate-spin':isPlaing,
          
        })} src={track?.track?.album?.images[2].url} alt="Logo" /> :  <div className=' bg-white/10 rounded-full p-[20px]'> <Music/> </div>}
        <div className="text-[15px] hidden md:block">
        <h1 className="">{track?.track?.name}</h1>
        <span className="text-[12px]">{track?.track?.album?.artists[0].name}</span>
        </div>
      </div>
      <div className="flex flex-col w-[60%] items-center">
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
        <button className=" transition-all" onClick={PlaySound}>{isPlaing ? <Pause color="white" size={40} className="bg-white/10 rounded-full duration-200 hover:scale-110 p-[10px]" /> : <Play color="white" size={40} className="bg-white/10 pr-[6px]  duration-200  hover:scale-110 rounded-full p-[10px]" />}</button>
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
            step={0.001}
            value={time}
            className=" mx-[15px] w-[60%] cursor-pointer h-[4px]"
          />
          <span className="w-[34px]">{moment.utc(sound?.duration*1000 ? sound?.duration*1000: 0).format('m:ss')}</span>
        </div>
      </div>
      <div className="flex self-end gap-2">
        <button className=" p-[10px] rounded-full hover:bg-white/10 transition-colors flex justify-center" onClick={Volume}>{sound?.volume === 0 ? <VolumeX/> : sound?.volume <= 0.5 ? <Volume1/> : <Volume2/>}</button>
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
