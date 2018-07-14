/* this function takes an array and two indices as arguments
and returns a slice of the array based on those indices */
function sliceArray(arr, beginSlice, endSlice) {
  return arr.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
