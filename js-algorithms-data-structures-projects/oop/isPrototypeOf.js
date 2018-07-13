/*
isPrototypeOf()

an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// returns true

*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(beagle.prototype);  // undefined
console.log(Dog.prototype);  // constructor function

// is the prototype of Dog also the prototype of Beagle?
Dog.prototype.isPrototypeOf(beagle);  // true


/*
prototype chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
// returns true
How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true
The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.

In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.

Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Is the prototype for beagle Dog.prototype?
Dog.prototype.isPrototypeOf(beagle);  // => true

// is the prototype of Object the prototype for Dog.prototype?
Object.prototype.isPrototypeOf(Dog.prototype); // => true
