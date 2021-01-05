import { getRandomInt } from '../src/index.js';

function gameEven() {
  const number = getRandomInt(1, 99);
  console.log(`Question: ${number.toString()}`);
  return (number % 2 === 0) ? 'yes' : 'no';
}
export default gameEven;
