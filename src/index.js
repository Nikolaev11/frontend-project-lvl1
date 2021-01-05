import readlineSync from 'readline-sync';

function palyGame(name, game) {
  const numberOfRounds = 3;
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const correctAnswer = game();
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      if (i >= numberOfRounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
      break;
    }
  }
}
export default palyGame;
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
