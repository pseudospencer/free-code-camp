class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

{/*
    This method can be used to render the react content on the server side for faster page loads and better search engine indexing.
    renderToString requires a react component in it's element form.
*/}
ReactDOMServer.renderToString(<App />);
