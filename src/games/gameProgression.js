import { getRandomInt } from '../utils.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const gameProgression = () => {
  const progressionStart = getRandomInt(1, 19);
  const progressionStep = getRandomInt(2, 9);
  const hiddenNumIndex = getRandomInt(0, 9);
  const progression = [];
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenNumIndex) {
      progression.push('..');
      answer = progressionStart + i * progressionStep;
    } else {
      progression.push(progressionStart + i * progressionStep);
    }
  }
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  playGame(description, gameProgression);
};
