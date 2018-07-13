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

// own props vs prototype props
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
