// Curried addition function. Wants 3 arguments.
function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    }
  }
}
add(10)(20)(30); // 60
add(10)(15); // function(z) { return 10 + 15 + z }

// Uncurried addition function
function uncurriedAdd( x, y, z ) {
  return x + y + z;
}
