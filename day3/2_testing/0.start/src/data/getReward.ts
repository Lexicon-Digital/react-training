const getReward = (score: number, expectation: number) => {
  const percentageOver = (score - expectation) / expectation;
  if (percentageOver > 0.1) {
    return 300;
  }
  if (percentageOver > 0) {
    return 150;
  }
  return 50;
};

export { getReward };
