import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => {
  function checkEven(gamerNum) {
    return (gamerNum % 2 === 0) ? 'yes' : 'no';
  }

  function gameEven() {
    const gamerNum = getRandomInt(1, 99);
    return [gamerNum, checkEven(gamerNum)];
  }
  playGame(generalQuestion, gameEven);
};
