import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  // 2.1 add a new state for notification
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible; // it looks like mutable code but immur translates immutable code and create a new state object
    },
    // 2.2 add a new reducer for notification
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
