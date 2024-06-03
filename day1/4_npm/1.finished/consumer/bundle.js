var bundle = (function (exports) {
  'use strict';

  function isEvenNumber(numberToTest) {
    const remainder = numberToTest % 2;
    if (remainder === 0) {
      return true;
    }
    return false;
  }

  // module.exports = isEvenNumber;

  // import { isEvenNumber } from "is-even-number"; // import, ES6 way
  // const isEvenNumber = require("is-even-number"); // import, commonJs way

  const isOdd = (number) => {
    return !isEvenNumber(number);
  };

  exports.isOdd = isOdd;

  return exports;

})({});
