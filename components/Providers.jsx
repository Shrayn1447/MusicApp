'use client'
import React from 'react'
import DataProviders from './DataProviders'
export default function Providers({children}) {
  return (
    <DataProviders>
            {children}
    </DataProviders>
  )
}
