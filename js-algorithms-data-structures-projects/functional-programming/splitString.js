// split a string into an array, making sure to return only letters
function splitify(str) {
  return str.split(/[^A-Za-z]/);
}

console.log(splitify("Hello World,I-am code"));
