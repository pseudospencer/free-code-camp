// An object's prototype is shared among all instances of that object. Saves memory

function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4;
}

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); // 4
