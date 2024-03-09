import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// create a store
// const store = createStore(counterSlice.reducer);
// configureStore : create a store and make merging multiple reducers into one reducer
const store = configureStore(
  // passing an object
  // single reducer
  {
    reducer: counterSlice.reducer,
  }
  // multiple reducers
  //   {
  //     reducer: {
  //         counter: counterSlice.reducer
  //     }
  //   }
);

export default store;
