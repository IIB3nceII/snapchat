import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CameraState {
    value: any;
}

const initialState: CameraState = {
  value: null,
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCameraImage: (state, action: PayloadAction<string>) => {
      state.value =action.payload;
    },
    resetCameraImage: (state) =>{
        state.value=null;
    }
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = (state: RootState) => state.camera.value;

export default cameraSlice.reducer;
