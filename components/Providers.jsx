"use client";
import React from "react";
import DataProviders from "./DataProviders";
import { SessionProvider } from "next-auth/react";
export default function Providers({ children }) {
  return (
    <DataProviders>
      <SessionProvider>
        {children}
      </SessionProvider>
    </DataProviders>
  );
}
