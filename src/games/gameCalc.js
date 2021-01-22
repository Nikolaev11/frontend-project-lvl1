import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';
const mathOperationList = ['+', '-', '*'];

const gameCalc = () => {
  const num1 = getRandomInt(1, 99);
  const num2 = getRandomInt(1, 9);
  const mathOperation = mathOperationList[getRandomInt(0, mathOperationList.length - 1)];
  let answer;
  switch (mathOperation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      return false;
  }
  return [`${num1} ${mathOperation} ${num2}`, answer.toString()];
};

export default () => {
  playGame(description, gameCalc);
};
