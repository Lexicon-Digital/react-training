function isEvenNumber(numberToTest) {
  const remainder = numberToTest % 2;
  if (remainder === 0) {
    return true;
  }
  return false;
}

export { isEvenNumber };

// module.exports = isEvenNumber;
