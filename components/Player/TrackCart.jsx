'use client'
import React from 'react'
import { Music } from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectTrack} from '../../store/features/counter/counterSlice'
export default function TrackCart() {
const {track} = useSelector(selectTrack)
  return (
    <div className="flex justify-center w-[300px] items-center text-[14px] gap-[10px]" >
        {track ? <img src={track.track.album?.images[2].url} alt="Logo" /> :  <div className=' bg-white/10 rounded-full p-[20px]'> <Music/> </div>}
        <div className="text-[15px] hidden md:block">
        <h1 className="">{track?.track?.name}</h1>
        <span className="text-[12px]">{track?.track?.album?.artists[0].name}</span>
        </div>
     </div>
  )
}
