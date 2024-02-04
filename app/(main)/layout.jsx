"use client";
import Player from "../../components/Player/Player";
import Navigation from '../../components/Navigation'
import Sitebar from "../../components/Sitebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/resizable"
export default function layout({ children }) {
  return (
      <div
        className="max-h-screen flex flex-col h-[100dvh] md:h-screen gap-2"
      >
        <ResizablePanelGroup 
          direction="horizontal"
          className="flex gap-1 ">
          <Sitebar />
          <ResizableHandle  className={'bg-black'} />
          <ResizablePanel defaultSize={50} className="bg-[#121212]  rounded-xl m-[8px_0px_0px_0px]">
            <div className="overflow-y-auto p-3 min-h-screen">
              <Navigation/>
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <Player />
      </div>
  );
}
