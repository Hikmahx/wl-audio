import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./reducers/audioSlice";
import sharedReducer from "./reducers/sharedSlice";

export const store = configureStore({
  reducer: {
    audio: audioReducer,
    shared: sharedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
