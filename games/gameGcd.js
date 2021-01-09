import getRandomInt from '../src/getRandomInt.js';
import palyGame from '../src/index.js';

function gameGcd() {
  const output = [];
  let multi = getRandomInt(1, 9);
  const num1 = multi * getRandomInt(1, 12);
  const num2 = multi * getRandomInt(1, 12);
  output.push(`${num1} ${num2}`);
  for (let i = Math.min(num1, num2); i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      multi = i;
      break;
    }
  }
  output.push(multi);
  return output;
}
palyGame('Find the greatest common divisor of given numbers.', gameGcd);

export default gameGcd;
