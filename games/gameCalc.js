import getRandomInt from '../src/getRandomInt.js';
import palyGame from '../src/index.js';

function gameCalc() {
  const output = [];
  const variableA = getRandomInt(1, 99);
  const variableB = getRandomInt(1, 99);
  const variableC = getRandomInt(2, 9);
  const selectMathOperation = getRandomInt(0, 2);
  switch (selectMathOperation) {
    case 0:
      output.push(`${variableA} + ${variableB}`);
      output.push(variableA + variableB);
      break;
    case 1:
      output.push(`${variableA} - ${variableB}`);
      output.push(variableA - variableB);
      break;
    case 2:
      output.push(`${variableA} * ${variableC}`);
      output.push(variableA * variableC);
      break;
    default:
      return ['0 + 0', 0];
  }
  return output;
}
palyGame('What is the result of the expression?', gameCalc);

export default gameCalc;
