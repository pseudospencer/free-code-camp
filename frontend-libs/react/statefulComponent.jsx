class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    {/* state must be an object */}
    this.state = {
      name : "Jeremy"
    };

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
