const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

{/* Working off FreeCodeCamp example, there is a div with id challenge-node included in the setup */}
const chalNode = document.getElementById("challenge-node");

ReactDOM.render(JSX, chalNode);
