/*
Creating my own version of map on Array.prototype
*/

var s = [23, 65, 98, 5];

// myMap takes a callback function as an argument
Array.prototype.myMap = function(callback) {
  // creates a new array
  var newArray = [];

  // iterates through each item in this
  this.forEach( function(item) { // forEach takes a function, and performs it on each item in this

    newArray.push( callback(item) ) // calls callback() on the item, then pushes the resuly to newArray

  });

  // finally, return the new array made up of all the transformed values
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
