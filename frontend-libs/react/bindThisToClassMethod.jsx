class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    {/* Explicitly bind this to addItem so this is defined within method */}
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* use this.addItem to increment this.state.itemCount on click */ }
        <button onClick={this.addItem}>Click Me</button>

        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
