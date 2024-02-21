'use client'
import React from "react";
import Link from "next/link";
import { Home, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import {
  ResizablePanel,
} from "../components/ui/resizable"
export default function Sitebar() {
  return (
    <>
      <ResizablePanel defaultSize={0} className="hidden max-w-md  min-w-[200px] md:flex  text-[#b3b3b3] flex-col gap-2  rounded-xl m-[8px_0px_0px_8px]">
        <section className=" rounded-xl bg-[#121212] flex flex-col justify-center gap-6 p-[12px_8px]">
            <Link href={'/'} className="cursor-pointer p-[4px_12px] flex  items-center gap-3 hover:text-white ">
              <Home className="w-6 h-6" /> 
              <span>Главная</span>
            </Link>
        </section>
        <section className=" bg-[#121212] grow rounded-xl">

        </section>
      </ResizablePanel>
      <div className="absolute top-4 right-4  md:hidden block ">
        <Sheet>
          <SheetTrigger><Menu className="h-12 w-12"/></SheetTrigger>
          <SheetContent side={'right'}>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}


