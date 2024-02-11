"use client";
import React from "react";
import AudioProviders from "./AudioProvider";
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
      <AudioProviders>
        {children}
      </AudioProviders>
    </Provider>
  );
}
