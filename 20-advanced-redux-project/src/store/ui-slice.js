import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // it looks like mutable code but immur translates immutable code and create a new state object
    },
  },
});

export const uiActions = uiSlice.actions; // action
export default uiSlice; // slice
