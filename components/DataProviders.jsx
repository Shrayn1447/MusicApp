"use client";
import { createContext} from "react";
import { useAudio } from "../hooks/useAudio";
export const DataContext = createContext();
export default function DataProviders({ children }) {
  const {sound} = useAudio()
  
  return (
    <DataContext.Provider
      value={{
        sound
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
