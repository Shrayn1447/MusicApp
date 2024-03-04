import getTrack from '../../../../lib/getTrack'
import TrackList from '../../../../components/TrackList/TrackList'
export default async function page({params}) {
  const data = await getTrack(params.id)
  return (
    <TrackList data={data}/>
  )
}
