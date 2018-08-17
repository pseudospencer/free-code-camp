// Redux:

// Action type
const ADD = 'ADD';
// Action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
// Reducer (Action handler)
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
// Store
const store = Redux.createStore(messageReducer);

// React:

// pull in ReactRedux stuff
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// UI rendering component
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '' // tracks input in local state
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input); // tracks messages in redux store
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/>
        <br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => { return ( <li key={idx}>{message}</li>) }) }
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

// connected version of Presentational component
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
