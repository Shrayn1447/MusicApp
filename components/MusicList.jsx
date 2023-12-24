'use client'
import React from "react";
import { useContext } from "react";
import clsx from "clsx";
import { DataContext } from "@/components/DataProviders";
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
  <div>
    <ul>
      {index.items?.map((el, index, arr) => {
        return (
          <li
            onClick={() => {
              setNumber(index);
              if (sound.current.src !== el.track.preview_url) {
                sound.current.src = el.track.preview_url;
                sound.current.currentTime = 0;
                setIsPlaing(true);
                setTrack(arr[index]);
                sound.current.play();
                return;
              }
              if (!isPlaing) {
                setIsPlaing(true);
                setTrack(arr[index]);
                sound.current.src = el.track.preview_url;
                sound.current.play();
              } else {
                setIsPlaing(false);
                setTrack(arr[index]);
                sound.current.pause();
              }
            }}
            className={clsx(
              " w-[60%] justify-between rounded-lg hover:bg-white/10 cursor-pointer flex items-center mx-auto container py-[5px] my-[15px] ",
              {
                "bg-white/10": track?.track?.id === el.track.id,
              
              }
            )}
            key={el.track.preview_url}
          >
           
              <div className="flex  items-center gap-[10px]">
                <div className="flex items-center gap-[10px]">
                <img src={el.track.album.images[2].url} alt="TrackImg" />
                </div>
                <div>
                  <p>{el.track.name}</p>
                </div>
              </div>
              <div>
                {`${Math.floor((el.track.duration_ms / (1000 * 60)) % 60)}:${Math.floor((el.track.duration_ms / 1000) % 60) <=9 ? '0' : ''}${Math.floor((el.track.duration_ms / 1000) % 60)}`}
              </div>
          
          </li>
        );
      })}
    </ul>
  </div>
  );
}
