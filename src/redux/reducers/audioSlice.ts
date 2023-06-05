import { createSlice } from "@reduxjs/toolkit";

interface AudioState {
  menuDisplay: boolean;
}

const initialState: AudioState = {
  menuDisplay: false,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {},
});

// export const {  } = audioSlice.actions;
export default audioSlice.reducer;
