import { createSlice } from "@reduxjs/toolkit";

interface AudioState {
  isPlaying: boolean;
  progress: number;
}

const initialState: AudioState = {
  isPlaying: false,
  progress: 0,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    play: (state, action) => {
      state.isPlaying = action.payload;
    },
    updateProgress: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const {  play, updateProgress } = audioSlice.actions;
export default audioSlice.reducer;
