'use client'
import Player from '@/components/Player'
import MusicList from '@/components/MusicList'
import { createContext,useState} from "react"
import {dataJson} from '@/lib/music/index'
const sound = new Audio()
export const DataContext = createContext(null)
export default function Home() {
  const index = JSON.parse(dataJson)
  const [isPlaing, setIsPlaing] = useState(false);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(sound.volume * 10)
  const [isVolume, setIsVolume] = useState(true)
  const [track, setTrack] = useState()
  const [number, setNumber] = useState(0)
  return (
    <DataContext.Provider value={{
      sound,
      isPlaing,setIsPlaing,
      time,setTime,
      volume,setVolume,
      isVolume,setIsVolume,
      index,
      track, setTrack,
      number, setNumber,
    }}>
        <MusicList/>
        <Player/>
    </DataContext.Provider>
  )
}


