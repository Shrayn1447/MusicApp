import getPlayList from '../../lib/getPlayList'
import PlayList from '../../components/PlayList'
export default async function page() {
  const data = await getPlayList()
  return (
    <div className='flex flex-wrap gap-5 p-8'>{data.map((item) => {
      return (
       <PlayList item={item} />
      )
    })}</div>
  )
}
