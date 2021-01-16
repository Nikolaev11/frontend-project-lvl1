import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const generalQuestion = 'What is the result of the expression?';
export default () => {
  function gameCalc() {
    const variableA = getRandomInt(1, 99);
    const variableB = getRandomInt(1, 9);
    const mathOperation = ['+', '-', '*'][getRandomInt(0, 2)];
    let resultOfExpression = 0;
    switch (mathOperation) {
      case '+':
        resultOfExpression = variableA + variableB;
        break;
      case '-':
        resultOfExpression = variableA - variableB;
        break;
      case '*':
        resultOfExpression = variableA * variableB;
        break;
      default:
        return false;
    }
    return [`${variableA} ${mathOperation} ${variableB}`, resultOfExpression.toString()];
  }
  playGame(generalQuestion, gameCalc);
};
