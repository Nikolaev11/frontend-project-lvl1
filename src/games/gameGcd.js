import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const generalQuestion = 'Find the greatest common divisor of given numbers.';
export default () => {
  function findGcd(num1, num2) {
    let a = num1;
    let b = num2;
    while (b) {
      const c = b;
      b = a % b;
      a = c;
    }
    return a;
  }

  function gameGcd() {
    const multi = getRandomInt(1, 9);
    const num1 = multi * getRandomInt(1, 12);
    const num2 = multi * getRandomInt(1, 12);
    return [`${num1} ${num2}`, findGcd(num1, num2).toString()];
  }

  playGame(generalQuestion, gameGcd);
};
