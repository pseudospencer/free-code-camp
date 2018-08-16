const defaultState = {
    login: false
};

// reducer tells store how to respond to actions, modify state
// takes state and action as arguments, returns a new state
// doesn't modify state directly, only return a new copy of state
const reducer = (state = defaultState, action) => {
    if (action.type == "LOGIN") {
        return {
            login: true
        };
    } else {
        return defaultState;
    }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};