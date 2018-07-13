/*
You can use an IIFE to create a module.

A module groups multiple mixins, properties, etc. into a single object.
*/

let funModule = ( function() {
  return {

    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },

    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
}) ();

// creating a module like this is cool because it lets you add mixins through the objects methods

let duck = {};

funModule.singMixin(duck); // adds method
funModule.isCuteMixin(duck); // adds method

duck.sing(); // "Singing to an awesome tune"
duck.isCute() // true

// WRONG: ES6 arrow function Style
// ** Arrow functions don't bind this to the object that called them. They cannot be used for object methods.

// let funModule = () => {
//   return {
//     isCuteMixin = (obj) => {
//       obj.isCute = () => { return true; };
//     },
//
//     singMixin = (obj) => {
//       obj.sing = () => { console.log("Singing to an awesome tune"); };
//     }
//   };
// }()
