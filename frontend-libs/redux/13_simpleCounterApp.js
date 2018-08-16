// counter action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// reducer - requires state and action as arguments, tells store how to handle actions
const counterReducer = (state = 0, action) => {
    // Use a switch to handle different action types
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// action creator functions
const incAction = () => {
    return {
        type: INCREMENT
    }
}
const decAction = () => {
    return {
        type: DECREMENT
    }
}

// create store by passing reducer function
const store = Redux.createStore(counterReducer);