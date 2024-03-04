'use client'
import React from 'react'
import { Loader2 } from 'lucide-react';
export default function loading() {
  return (
    <div className='h-[80vh] w-full animate-spin flex justify-center items-center'>
        <Loader2 size={100} color='green' />
    </div>
  )
}
