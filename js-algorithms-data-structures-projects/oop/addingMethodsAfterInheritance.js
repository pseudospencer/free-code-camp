/*
Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
*/

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

// Dog object - child.
function Dog() { }

// Set Dog's prototype to an instance of Animal's prototype for inheritance (eat)
Dog.prototype = Object.create(Animal.prototype);

// set Dog.prototype's constructor to Dog
Dog.prototype.constructor = Dog;

// Add a bark method to Dog's prototype
Dog.prototype.bark = function () {
    console.log("Woof!");
}

// Create beagle as an instance of Dog.
let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
