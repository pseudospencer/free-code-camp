function Animal() { }  // supertype

Animal.prototype = {  // prototype
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype); // Assign Animal.prototype as duck's prototype
let beagle = Object.create(Animal.prototype); // Assign Animal.prototype as beagle's prototype

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
