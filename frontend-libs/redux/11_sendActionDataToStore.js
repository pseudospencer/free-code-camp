const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch (action.type) {
        case ADD_NOTE:
            return action.text;
        default:
            return state;
    }
};

// this time, adding in a data element to the action (text).
// reducer returns the text data as state
const addNoteText = (note) => {
    return {
        type: ADD_NOTE,
        text: note
    }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());