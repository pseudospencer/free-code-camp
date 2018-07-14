/*
Implement a filter clone on Array.prototype
*/

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  // for each item, if the item passes the callback, push it to newArray
  this.forEach(
    function (item) {
      if ( callback(item) ){
        newArray.push(item);
      }
    }
  );

  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
