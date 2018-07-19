// Check if every number in an array is positive
function checkAllPositive(arr){
    // Array.prototype.every() returns true if every element in the array passes the callback function
    return arr.every( item => item > 0 );
}

checkAllPositive([1, 2, 3, -4, 5]);  // false

// Check if at least one number in an array is positive
function checkSomePositive(arr) {
    // Array.prototype.every() returns true if at least one element in the array passes the callback function
    return arr.some( item => item > 0 );
}
checkSomePositive([1, 2, 3, -4, 5]); // true
