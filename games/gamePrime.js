import getRandomInt from '../src/getRandomInt.js';
import palyGame from '../src/index.js';

function gamePrime() {
  const output = [];
  const number = getRandomInt(2, 99);
  output.push(number);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      output.push('no');
      return output;
    }
  }
  output.push('yes');
  return output;
}
palyGame('Answer "yes" if given number is prime. Otherwise answer "no".', gamePrime);

export default gamePrime;
