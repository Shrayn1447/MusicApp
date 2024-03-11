'use client'

import { useRouter } from 'next/navigation';
import { useAudio } from '../AudioProvider'
import { AudioLines } from 'lucide-react';
import { useDispatch} from 'react-redux'
import {useTrack} from '../../hooks/useTrack'
import { setTrackPage,setPlayList} from '../../store/features/counter/counterSlice'
import clsx from 'clsx'
import moment from 'moment'
export default function TrackList({data}) {
    const {sound} = useAudio()
    const {track} = useTrack()
    const router = useRouter()
    const dispatch = useDispatch()
    return (
    <div   className="py-[20px] h-[85vh]" >
      <ul className="pb-[120px]">
        {data.items?.map((el,index) => {
          return (
            <li
              onClick={() => {
                dispatch(setPlayList({data:data.items}))
                dispatch(setTrackPage({
                  sound,
                  index,
                  el,
                }))}}
              className={clsx(
                "min-w-[60%] justify-between rounded-lg hover:bg-[#2a2a2a] cursor-pointer flex items-center px-[20px] py-[10px] ",
                {
                  "bg-[#2a2a2a]": track?.track?.track?.id === el.track.id,
                
                }
              )}
              key={el.track.id}
            >
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px]">
                    {index + 1}
                  </div>
                  <div className="flex items-center justify-center relative ">
                    {track?.track?.id === el.track.id && <div className={"absolute text-green-500"}>
                    <AudioLines size={30}/>
                    </div> }
                    <img className='h-[50px]' src={el.track.album.images[2].url} alt="TrackImg" />
                  </div>
                  <div className='flex flex-col justify-center  text-[10px]'>
                    <p className='m-0 text-[12px] '>{el?.track.name}</p>
                    <ul  className='flex gap-2 text-green-500 font-bold '>
                      {el?.track.artists.map((el) => 
                       (
                        <li key={el.id} onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/artist/${el.id}`)
                        }}  className='hover:cursor-pointer hover:underline'>
                          {el.name}
                        </li>
                       )
                      )}
                    </ul>
                  </div>
                </div>
                <div className='text-[14px]'>
                  {`${moment.utc(el.track.duration_ms).format('mm:ss')}`}
                </div>
            </li>
          );
        })}
      </ul>
    </div>
    );
}
