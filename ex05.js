// Instructions: Use lodash's reduce function to get the product of all numbers in the array.

const _ = require("lodash");

const numbers = [1, 2, 3, 4];

const product = _.reduce(
  numbers,
  (total, double) => {
    return total * double;
  },
  1
);

console.log(product); // Expected output: 24
