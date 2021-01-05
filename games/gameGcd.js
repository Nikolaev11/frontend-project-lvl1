import { getRandomInt } from '../src/index.js';

function gameGcd() {
  let multi = getRandomInt(1, 9);
  const num1 = multi * getRandomInt(1, 12);
  const num2 = multi * getRandomInt(1, 12);
  console.log(`Question: ${num1} ${num2}`);
  for (let i = Math.min(num1, num2); i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      multi = i;
      break;
    }
  }
  return multi;
}
export default gameGcd;
