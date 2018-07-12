function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");

let ownProps = [];

// push all own props to array
for (let p in canary) {
  if (canary.hasOwnProperty(p)) {
    ownProps.push(p);
  }

// instance of operator checks if instantiated as a Bird object
canary instanceOf Bird;  // true
