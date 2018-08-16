const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

let count = 0;

function increment() {
    count += 1;
}

// store.subscribe is the listener - need to pass it a callback function
store.subscribe(increment);

store.dispatch({
    type: ADD
});
console.log(count);
store.dispatch({
    type: ADD
});
console.log(count);
store.dispatch({
    type: ADD
});
console.log(count);