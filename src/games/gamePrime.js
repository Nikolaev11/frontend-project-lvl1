import getRandomInt from '../getRandomInt.js';
import playGame from '../index.js';

const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => {
  function checkPrime(gamerNum) {
    const result = 'yes';
    for (let i = 2; i < gamerNum; i += 1) {
      if (gamerNum % i === 0) {
        return 'no';
      }
    }
    return result;
  }

  function gamePrime() {
    const gamerNum = getRandomInt(2, 99);
    return [gamerNum, checkPrime(gamerNum)];
  }
  playGame(generalQuestion, gamePrime);
};
