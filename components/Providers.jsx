"use client";
import React from "react";
import DataProviders from "./DataProviders";
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { useRef } from "react";
export default function Providers({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = store()
  }
  return (
    <Provider store={storeRef.current}>
      <DataProviders>
        {children}
      </DataProviders>
    </Provider>
  );
}
