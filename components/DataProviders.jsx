"use client";
import { createContext, useState,useRef,useEffect } from "react";
import { dataJson } from "@/lib/music/index";

export const DataContext = createContext(null);
export default function DataProviders({ children }) {
  const sound  = useRef()
  const index = JSON.parse(dataJson);
  const [isPlaing, setIsPlaing] = useState(false);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isVolume, setIsVolume] = useState(true);
  const [track, setTrack] = useState();
  const [number, setNumber] = useState(0);
  useEffect(() => {
    sound.current = new Audio()
  }, [])
  return (
    <DataContext.Provider
      value={{
        sound,
        isPlaing,
        setIsPlaing,
        time,
        setTime,
        volume,
        setVolume,
        isVolume,
        setIsVolume,
        index,
        track,
        setTrack,
        number,
        setNumber,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
