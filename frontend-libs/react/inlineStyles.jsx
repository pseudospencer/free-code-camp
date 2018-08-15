class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72 }}>Big Red</div>
      {/*
        This would also work:
        <div style={{color: "red", fontSize: "72px" }}>Big Red</div>
        */}
    );
  }
};

{/* Another example of styles */}
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};

class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
