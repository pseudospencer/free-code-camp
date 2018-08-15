

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  {/* Another way to render the state. Can use regular JS within the render function before return */}
  render() {
    const name = this.state.name;

    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
