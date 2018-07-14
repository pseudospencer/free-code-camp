/*
"Pure functions" don't change anything.

The incrementer function is a pure function that returns fixedValue + 1 without mutating fixedValue
*/

var fixedValue = 4;

function incrementer() {
    // This function is not a pure function: it has an implicit external dependency on the presence of fixedValue
    let increment = fixedValue + 1;
    return increment;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4


function incrementer2(input) {
    // This function is a pure function. It takes an input variable and returns an output without modifying the input
    let output = input + 1;
    return output;
}
