const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// provides specific action creators to react components so that they can dispatch actions to redux store
// uses store.dispatch() behind the scenes
const mapDispatchToProps = (dispatch) => {
    return ({
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    })
}// returns an object that contains a property pointing to a function that dispatches action + relevant data
