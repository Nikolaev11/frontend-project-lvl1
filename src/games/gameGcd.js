import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b) {
    const c = b;
    b = a % b;
    a = c;
  }
  return a;
};

const gameGcd = () => {
  const num1 = getRandomInt(1, 120);
  const num2 = getRandomInt(1, 60);
  return [`${num1} ${num2}`, findGcd(num1, num2).toString()];
};

export default () => {
  playGame(description, gameGcd);
};
