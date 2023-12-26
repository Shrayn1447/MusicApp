import Player from "@/components/Player";
import Providers from "@/components/Providers";
import Dashboard from "@/components/Sitebar";
export default function layout({ children }) {
  return (
    <Providers>
      <div className="min-h-screen h-[100dvh] md:h-screen grid grid-cols-[8fr] md:grid-cols-[1.2fr_8fr] md:gap-2">
          <Dashboard />
          <div className="overflow-y-auto rounded-xl m-[8px_0px_0px_0px] ">{children}</div>
          <Player />
      </div>
    </Providers>
  );
}
