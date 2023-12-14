import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface scrollState {
  value: boolean;
}
const initialState: scrollState = {
  value: false,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    onState: (state) => {
      state.value = true;
    },
    offState: (state) => {
      state.value = false;
    },
  },
});
export const { onState, offState } = scrollSlice.actions;
export const selectScroll = (state: RootState) => state.scroll.value;

export default scrollSlice.reducer;
