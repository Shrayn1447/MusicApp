'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {ChevronLeft,ChevronRight } from 'lucide-react'
export default function Navigation() {
    const router = useRouter()
    return (
        <navigator className='flex  gap-2'>
            <button onClick={() => {
                router.back()
            }} className=' bg-black rounded-full text-white/70  hover:text-white '><ChevronLeft size={16} strokeWidth={1}  className='w-8 h-8'/></button>
            <button onClick={() => {
                router.forward()
            }} className='bg-black rounded-full text-white/70  hover:text-white '><ChevronRight size={16} strokeWidth={1} className='w-8 h-8'/></button>
        </navigator>
  )
}
