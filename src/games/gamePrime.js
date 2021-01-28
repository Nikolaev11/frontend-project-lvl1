import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return result;
};

const gamePrime = () => {
  const question = getRandomInt(2, 99);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(description, gamePrime);
};
