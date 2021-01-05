import { getRandomInt } from '../src/index.js';

function gameAddition() {
  const terms = getRandomInt(1, 99);
  const addends = getRandomInt(1, 99);
  console.log(`Question: ${terms} + ${addends}`);
  return terms + addends;
}

function gameSubtraction() {
  const subtrahend = getRandomInt(1, 99);
  const minuend = getRandomInt(1, 99);
  console.log(`Question: ${subtrahend} - ${minuend}`);
  return subtrahend - minuend;
}

function gameMultiplication() {
  const multiplier = getRandomInt(1, 99);
  const multiplicand = getRandomInt(2, 9);
  console.log(`Question: ${multiplier} * ${multiplicand}`);
  return multiplier * multiplicand;
}

function gameCalc() {
  const selectMathOperation = Math.floor(Math.random() * 3);
  switch (selectMathOperation) {
    case 0:
      return gameAddition();
    case 1:
      return gameSubtraction();
    case 2:
      return gameMultiplication();
    default:
      return gameAddition();
  }
}

export default gameCalc;
