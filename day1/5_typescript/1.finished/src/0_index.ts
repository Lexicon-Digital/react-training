//////////////// JS ROULETTE

function operation(first: number, second: number) {
  return first + second;
}

const arg1 = 10;
const arg2 = 20;

const result = operation(arg1, arg2);

console.assert(result === 30, " FAILED, got: ", result);
