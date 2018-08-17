class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage(event) {
    event.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: ''
    });
  }

  render() {
    const messagesLI = this.state.messages.map( item => <li key={item}>{item}</li> );
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input type="textArea" value={this.state.input} onChange={this.handleChange} />
        <ul>
          {messagesLI}
        </ul>
        <button type="submit" onClick={this.submitMessage}>Submit</button>
      </div>
    );
  }
};
