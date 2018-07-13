/*
Sometimes it's useful to have private properties to for your objects.

By declaring with let, rather than this, the scope of the property is limited to the object itself

Properties or methods declared in this way cannot be modified or accessed directly because they are not declared in global scope.
*/

function Bird() {
  // Public property
  this.wings = 2

  // Private property only accessible to methods declared in this scope
  let weight = 15;

  // Public method that has access to (private) weight
  this.getWeight = function () {
    return weight;
  };

  // Public method that has access to (private) weight
  this.changeWeight = function (newVal) {
    weight = newVal;
    return weight;
  };

}

let duck = new Bird();


// Examples
console.log(duck.wings); // 2
console.log(duck.weight); // undefined
console.log(duck.getWeight()); // 15
console.log(duck.changeWeight(10)); // 10
console.log(duck.getWeight()); // 10
