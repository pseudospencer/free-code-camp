// action types
const ADD = "ADD";

// add message action creator
const addMessage = (message) => {
    return {
        type: ADD,
        message
    }
};

// message reducer to handle actions
const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);