// import { isEvenNumber } from "is-even-number"; // import, ES6 way
// const isEvenNumber = require("is-even-number"); // import, commonJs way
import { isEvenNumber } from "@get200ok/is-even-number";

const isOdd = (number) => {
  return !isEvenNumber(number);
};

export { isOdd };
