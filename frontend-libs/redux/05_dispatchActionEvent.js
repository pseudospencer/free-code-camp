const store = Redux.createStore(
    (state = {
        login: false
    }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// Use the store.dispatch() method to send actions to the Redux store
store.dispatch(loginAction());
// this would effectively do the same thing:
// store.dispatch({ type: "LOGIN" });