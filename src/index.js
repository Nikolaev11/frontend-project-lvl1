import readlineSync from 'readline-sync';
import getName from './cli.js';

function palyGame(generalQuestion, game) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(generalQuestion);
  const numberOfRounds = 3;
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const inputGameArr = game();
    console.log(`Question: ${inputGameArr[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === inputGameArr[1].toString()) {
      console.log('Correct!');
      if (i >= numberOfRounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${inputGameArr[1]}'. \nLet's try again, ${name}`);
      break;
    }
  }
}
export default palyGame;
