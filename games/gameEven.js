import getRandomInt from '../src/getRandomInt.js';
import palyGame from '../src/index.js';

function gameEven() {
  const output = [];
  const number = getRandomInt(1, 99);
  output.push(number);
  output.push((number % 2 === 0) ? 'yes' : 'no');
  return output;
}
palyGame('Answer "yes" if the number is even, otherwise answer "no".', gameEven);

export default gameEven;
