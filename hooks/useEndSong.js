
import { useEffect } from "react";
import { useAudio } from "../components/AudioProvider";
import { useDispatch } from 'react-redux'
import { songisover } from '../store/features/counter/counterSlice'

export function useEndSong() {
    const dispatch = useDispatch()
    const {sound} = useAudio()
    useEffect(() => {
        function nextsoungs() {
          dispatch(songisover({sound}))
        }
        sound?.addEventListener("ended", nextsoungs);
        return () => {
        sound?.removeEventListener("ended", nextsoungs);
        };
      }, []);
}