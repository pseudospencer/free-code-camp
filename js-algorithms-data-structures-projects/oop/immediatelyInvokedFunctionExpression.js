/*
Immediately invoked function expression (IIFE) is a function that is created anonymously and executed immediately

It has no name and is not stored in a variable. The function declaration itself must be wrapped in parentheses and immediately followed by parentheses in order to execute in this way
*/

// traditional function declaration
(function(){
  console.log("A cozy nest is ready");
})();

// ES6 arrow function declaration
(() => {console.log("Another one")})();
