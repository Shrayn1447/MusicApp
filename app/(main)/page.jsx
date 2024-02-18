'use client'
import React from "react";
import clsx from "clsx";
import { useAudio } from "../../components/AudioProvider";
import {data} from '../../lib/music/data'
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux'
import { setTrackPage, selectTrack} from '../../store/features/counter/counterSlice'

export default function Page() {
  const {sound} = useAudio()
  const dispatch = useDispatch()
  const {track} = useSelector(selectTrack)
  return (
  <div className="py-[20px]  h-[85vh]" >
    <ul className="pb-[120px]">
      {data.items?.map((el, index) => {
        return (
          <li
            onClick={() => {
              dispatch(setTrackPage({
                sound : sound,
                index,
                el,
              }))}}
            className={clsx(
              "min-w-[60%] justify-between rounded-lg hover:bg-[#2a2a2a] cursor-pointer flex items-center mx-auto container py-[5px] ",
              {
                "bg-[#2a2a2a]": track?.track?.id === el.track.id,
              
              }
            )}
            key={el.track.preview_url}
          >
              <div className="flex items-center gap-[10px]">
                <div className="w-[20px]">
                  {index + 1}
                </div>
                <div className="flex items-center gap-[10px]">
                <img src={el.track.album.images[2].url} alt="TrackImg" />
                </div>
                <div>
                  <p>{el?.track.name}</p>
                </div>
              </div>
              <div>
                {`${moment.utc(el.track.duration_ms).format('mm:ss')}`}
              </div>
          </li>
        );
      })}
    </ul>
  </div>
  );
}
