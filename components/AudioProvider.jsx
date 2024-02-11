"use client";
import { useState,useContext } from "react";
import { createContext} from "react";
export const AudioContext = createContext();
export default function AudioProviders({ children }) {
  const [sound] = useState(() => (typeof Audio !== 'undefined' ? new Audio() : null));
  return (
    <AudioContext.Provider
      value={{
        sound
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  return useContext(AudioContext);
};
