import { useEffect,useState } from "react"
'use client'
const [audio,setAudio] = useState()
useEffect(() => {
    setAudio(new Audio())
},[])

