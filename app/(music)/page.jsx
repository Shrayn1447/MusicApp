'use client'
import React from "react";
import { useContext } from "react";
import clsx from "clsx";
import { DataContext } from "@/components/DataProviders";
import moment from "moment";
export default function MusicList() {
  const {
    sound,
    isPlaing,
    setIsPlaing,
    index,
    track,
    setTrack,
    setNumber,
  } = useContext(DataContext);
  return (
  <div className="py-[20px] h-[85vh] overflow-y-auto" >
    <ul>
      {index.items?.map((el, index, arr) => {
        return (
          <li
            onClick={() => {
              setNumber(index);
              if (sound.src !== el.track.preview_url) {
                sound.src = el.track.preview_url;
                sound.currentTime = 0;
                setIsPlaing(true);
                setTrack(arr[index]);
                sound.play();
                return;
              }
              if (!isPlaing) {
                setIsPlaing(true)
                setTrack(arr[index])
                sound.src = el.track.preview_url
                sound.play()
              } else {
                setIsPlaing(false)
                setTrack(arr[index])
                sound.pause()
              }
            }}
            className={clsx(
              "min-w-[60%] justify-between rounded-lg hover:bg-[#2a2a2a] cursor-pointer flex items-center mx-auto container py-[5px] ",
              {
                "bg-[#2a2a2a]": track?.track?.id === el.track.id,
              
              }
            )}
            key={el.track.preview_url}
          >
              <div className="flex items-center gap-[10px]">
                <div>
                  {index + 1}
                </div>
                <div className="flex items-center gap-[10px]">
                <img src={el.track.album.images[2].url} alt="TrackImg" />
                </div>
                <div>
                  <p>{el.track.name}</p>
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
