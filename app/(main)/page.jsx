
import React from 'react'
import Link from 'next/link'
export default async function page() {
  return (
    <div className='p-6'>
        <h1 className='mb-[20px] font-bold text-[30px]'>
            Ваши любие хиты
        </h1>
        <div className='grid grid-cols-3 gap-3'>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={`/37i9dQZF1EIWBAeBtHuUT1`}>
                
            </Link>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={'/'}>
                 
            </Link>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={'/'}>
                   
            </Link>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={'/'}>
                  
            </Link>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={'/'}>
                   
            </Link>
            <Link className='flex cursor-pointer transition-all items-center gap-4 bg-black/20 hover:bg-[rgb(255,255,255)]/30 overflow-hidden rounded-md max-w-[500px]' href={'/'}>
                
            </Link>
        </div>
    </div>
  )
}
