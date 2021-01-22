import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => ((question % 2 === 0));

const gameEven = () => {
  const question = getRandomInt(1, 99);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  playGame(description, gameEven);
};
