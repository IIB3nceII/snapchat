import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import cameraReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
