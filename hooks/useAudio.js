'use client'
import { useEffect,useState } from "react"
export function useAudio() {
  const [sound, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio())
  }, [])
  return {sound}
}