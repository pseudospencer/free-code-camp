const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => {
    return {
        type: REQUESTING_DATA
    }
}
const receivedData = (data) => {
    return {
        type: RECEIVED_DATA,
        users: data.users
    }
}

const handleAsync = () => {
    // special action creator with dispatch included as an argument.
    return function(dispatch) {
        // dispatch request action - note. requestingData() must be called to return the action object
        // dispatch is included as an argument, and accessed by calling directly rather than as a method of store
        dispatch(requestingData());
        // simulated API call
        setTimeout(function() {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
            // with "API data" in hand, dispatch received data action
            dispatch(receivedData(data));

        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

// Redux.applyMiddleware is called as an optional paramater for redux.createStore.
// Passing in ReduxThunk includes it
const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);