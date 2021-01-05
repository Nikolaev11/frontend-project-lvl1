import { getRandomInt } from '../src/index.js';

function gamePrime() {
  const number = getRandomInt(2, 99);
  console.log(`Question: ${number}`);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}
export default gamePrime;
