'use client'
import React, { useContext } from "react";
import Link from "next/link";
import { DataContext } from "./DataProviders";
import { Home, LogOut, Heart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ResizablePanel,
} from "@/components/ui/resizable"
export default function Sitebar() {
  const {sound, isPlaing} = useContext(DataContext)
  return (
    <>
      <ResizablePanel  className="hidden max-w-md  min-w-[100px] md:flex  text-[#b3b3b3] flex-col gap-2  rounded-xl m-[8px_0px_0px_8px]">
        <section className=" rounded-xl bg-[#121212]">
            <Link href={'/'} className="cursor-pointer  py-[20px] flex items-center  justify-center  gap-3  hover:text-white"><Home /></Link>
            <Link href={'/like'} className="cursor-pointer  py-[20px] flex items-center  justify-center  gap-3   hover:text-white"><Heart /></Link>
        </section>
        <div className=" bg-[#121212] grow rounded-xl"></div>
         <Link onClick={() => {
          if(isPlaing) {
            sound.pause()
          } else{
            return
          }
         }} href={'/login'} className="cursor-pointer bg-[#121212] hover:text-white flex justify-center py-[20px] min-w-[50px] gap-3 rounded-xl"><LogOut /><span className=" hidden lg:block">Выйти</span></Link>
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


