import React from 'react'
import clsx from 'clsx'
import { Music } from 'lucide-react'
export default function TrackCart({isPlaing,track}) {
  return (
    <div className="flex justify-center w-[300px] items-center text-[14px] gap-[10px]" >
        {track ? <img className={clsx("animate-none rounded-full ", {
          'animate-spin':isPlaing,
          
        })} src={track?.track?.album?.images[2].url} alt="Logo" /> :  <div className=' bg-white/10 rounded-full p-[20px]'> <Music/> </div>}
        <div className="text-[15px] hidden md:block">
        <h1 className="">{track?.track?.name}</h1>
        <span className="text-[12px]">{track?.track?.album?.artists[0].name}</span>
        </div>
     </div>
  )
}
