import { useSelector} from 'react-redux'
import { selectTrack } from '../store/features/counter/counterSlice'
export function useTrack() {
    const track = useSelector(selectTrack)
    return {
        track
    }
}