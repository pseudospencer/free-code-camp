class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    {/* componentWillMount is called before render() when the component is being mounted to the DOM */}
    console.log("componentWillMount");
  }
  render() {
    return <div />
  }
};
