// import { isEvenNumber } from "is-even-number"; // import, ES6 way
// const isEvenNumber = require("is-even-number"); // import, commonJs way
import { isOdd } from "./isOdd.js";

const numberToTest = 90;
console.log(`Is ${numberToTest} an odd number? ${isOdd(numberToTest)}`);
