"use client";
import Player from "@/components/Player/Player";
import Providers from "@/components/Providers";
import Sitebar from "@/components/Sitebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
export default function layout({ children }) {
  return (
    <Providers>
      <div
        className="max-h-screen flex flex-col h-[100dvh] md:h-screen gap-2"
      >
        <ResizablePanelGroup 
          direction="horizontal"
          className="flex gap-1 ">
          <Sitebar />
          <ResizableHandle className={'bg-black'} />
          <ResizablePanel defaultSize={150} className="bg-[#121212]  p-[20px] rounded-xl m-[8px_0px_0px_0px]">
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
        <Player />
      </div>
    </Providers>
  );
}
