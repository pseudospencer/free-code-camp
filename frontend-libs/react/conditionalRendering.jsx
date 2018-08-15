class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {/* logical and to control output - if statement before && is false, will return false and render nothing */}
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
