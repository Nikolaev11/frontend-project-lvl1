import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  const result = true;
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
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
