/*
Set the child object's prototype to an instance of a parent object's prototye to inherit features.
*/

function Animal() { } // supertype

Animal.prototype = {  // supertype prototype
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }  // child

// Set child's (Dog) prototype to an instance of parent's prototype (Animal)
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
