const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // use Object.assign to create a shallow copy of existing objects. They are copied into the object in the first argument, so pass an empty one.
            // matching properties are overwritten by props of the source objects
            return Object.assign({}, state, {
                status: "online"
            });
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);