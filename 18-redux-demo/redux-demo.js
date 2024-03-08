const redux = require("redux"); // import redux

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
}; // create a reducer function

const store = redux.createStore(counterReducer); // create a store, store need to know who the reducer function is, that will manipulate the data

// create subscriber
const counterSubscriber = () => {
  const latestState = store.getState(); // give the latest state snapshot after it was updated
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// create an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
