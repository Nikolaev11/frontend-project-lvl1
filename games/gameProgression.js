import getRandomInt from '../src/getRandomInt.js';
import palyGame from '../src/index.js';

function gameProgression() {
  const output = [];
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
  output.push(question.join(' '));
  output.push(result);
  return output;
}
palyGame('What number is missing in the progression?', gameProgression);

export default gameProgression;
