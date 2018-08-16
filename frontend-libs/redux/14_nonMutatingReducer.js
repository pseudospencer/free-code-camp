const ADD_TO_DO = 'ADD_TO_DO';

// base state: a list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // an array filled with the contents of state + the new todo
            return [...state, action.todo];
        default:
            return state;
    }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo: todo
    }
}

const store = Redux.createStore(immutableReducer);