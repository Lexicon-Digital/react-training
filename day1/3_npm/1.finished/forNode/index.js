import { isEvenNumber as isEven } from "@get200ok/is-even-number";
// const isEven = require("is-even");

const isOdd = (testNumber) => {
  return !isEven(testNumber);
};

export { isOdd };

// module.exports = {
//   isOdd,
// };
