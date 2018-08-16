const store = Redux.createStore(
    (state = 5) => state
);

//get state from Redux store
const currentState = store.getState();