import readlineSync from 'readline-sync';
import getName from './cli.js';

const countOfRounds = 3;
function playGame(generalQuestion, getGameData) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(generalQuestion);
  for (let i = 1; i <= countOfRounds; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i >= countOfRounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
      break;
    }
  }
}
export default playGame;
