import readlineSync from 'readline-sync';

const roundsCount = 3;

const playGame = (generalQuestion, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(generalQuestion);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${name}`);
      return;
    }
    console.log('Correct!');
    if (i >= roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};

export default playGame;
