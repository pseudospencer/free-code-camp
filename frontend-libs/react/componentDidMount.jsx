class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    {/* API and server calls usually go in componentDidMount.
    Any calls of setState() will cause the component to re-render */}
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 1500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
};
