#!/usr/bin/node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${number.toString()}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    if (i >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
    break;
  }
}
