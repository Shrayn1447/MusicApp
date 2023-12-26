import React from "react";
import { Home, LogOut, Heart, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function Sitebar() {
  return (
    <>
      <div className="hidden md:flex text-[#b3b3b3] flex-col gap-2 rounded-xl m-[8px_0px_0px_8px]">
        <section className=" rounded-xl bg-[#121212]">
          <div className=" cursor-pointer  py-[20px] flex items-center justify-center gap-3 hover:text-white">
            <Home /> <span className=" hidden lg:block">Главная</span>
          </div>
          <div className=" cursor-pointer  py-[20px] flex items-center justify-center gap-3  hover:text-white">
            <Heart /> <span className=" hidden lg:block">Любимые</span>
          </div>
        </section>
        <div className=" bg-[#121212] grow rounded-xl"></div>
        <div className=" cursor-pointer bg-[#121212] hover:text-white flex justify-center py-[20px] min-w-[50px] gap-3 rounded-xl">
          <LogOut />
          <span className=" hidden lg:block">Выйти</span>
        </div>
      </div>
      <div className=" flex md:hidden ">
        <Sheet>
          <SheetTrigger className=" absolute top-4 right-4  md:hidden block"><Menu className="h-12 w-12"/></SheetTrigger>
          <SheetContent side={'right'}>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}


