"use client";
import React from "react";
import AudioProviders from "./AudioProvider";
import store  from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {persister} from '../store/store'
export default function Providers({ children }) {
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AudioProviders>{children}</AudioProviders>
      </PersistGate>
    </Provider>
  );
}
