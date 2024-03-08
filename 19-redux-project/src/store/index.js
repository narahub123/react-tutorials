import { createStore } from "redux";

// create reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: store.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: store.counter - 1,
    };
  }

  return state;
};

// create a store
const store = createStore(counterReducer);

export default store;
