"use client";
import { createContext, useState } from "react";
import { dataJson } from "@/lib/music/index";
import { useAudio } from "@/hooks/useAudio";
export const DataContext = createContext();
export default function DataProviders({ children }) {
  const {sound} = useAudio()
  const index = JSON.parse(dataJson);
  const [isPlaing, setIsPlaing] = useState(false);
  const [time, setTime] = useState(0);
  const [track, setTrack] = useState();
  const [number, setNumber] = useState(0);
  
  return (
    <DataContext.Provider
      value={{
        sound,
        isPlaing,
        setIsPlaing,
        time,
        setTime,
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
