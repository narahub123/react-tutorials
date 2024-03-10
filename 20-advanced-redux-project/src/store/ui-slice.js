import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",

  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // it looks like mutable code but immur translates immutable code and create a new state object
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status, // pending, success, error
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions; // action
export default uiSlice; // slice
