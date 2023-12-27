import Player from "@/components/Player";
import Providers from "@/components/Providers";
import Sitebar from "@/components/Sitebar";
export default function layout({ children }) {
  return (
    <Providers>
      <div className="min-h-screen h-[100dvh] md:h-screen grid grid-rows-1 gap-[8px_8px] grid-cols-[8fr] md:grid-cols-[1.2fr_8fr] ">
          <Sitebar/>
          <div className="  bg-[#121212] p-[20px] overflow-y-auto rounded-xl m-[8px_0px_0px_0px] ">{children}</div>
          <Player />
      </div>
    </Providers>
  );
}
