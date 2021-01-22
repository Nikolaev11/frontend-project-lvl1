import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const gameProgression = () => {
  const progressionStart = getRandomInt(1, 19);
  const progressionStep = getRandomInt(2, 9);
  const targetStepNum = getRandomInt(0, 9);
  let question = '';
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === targetStepNum) {
      question = question.concat('.. ');
      answer = progressionStart + i * progressionStep;
    } else {
      question = question.concat(`${progressionStart + i * progressionStep} `);
    }
  }
  return [question, answer.toString()];
};

export default () => {
  playGame(description, gameProgression);
};
