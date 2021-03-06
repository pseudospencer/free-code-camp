class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>{this.props.fiftyFifty ? "You win!" : "You lose!"}</h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // increment counter
    });
  }
  render() {
    let expression = Math.random() > .5;  // 50% odds
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
