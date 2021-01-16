import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const generalQuestion = 'What number is missing in the progression?';
export default () => {
  function gameProgression() {
    const progressionStep = getRandomInt(2, 9);
    const progressionStart = getRandomInt(1, 19);
    const progressionLength = getRandomInt(6, 12);
    const targetStepNum = Math.floor(progressionLength * Math.random());
    const question = [];
    let result = '';
    for (let i = 0; i < progressionLength; i += 1) {
      if (i === targetStepNum) {
        question.push('..');
        result = progressionStart + i * progressionStep;
      } else {
        question.push(progressionStart + i * progressionStep);
      }
    }
    return [question.join(' '), result.toString()];
  }
  playGame(generalQuestion, gameProgression);
};
