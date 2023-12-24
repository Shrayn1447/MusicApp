import Player from '@/components/Player'
import Providers from '@/components/Providers'
export default function layout({children}) {
  return (
    <Providers>
          {children}
          <Player />
    </Providers>
  )
}
