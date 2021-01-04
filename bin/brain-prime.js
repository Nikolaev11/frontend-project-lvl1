#!/usr/bin/node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

function gamePrime() {
  const number = 2 + Math.floor(Math.random() * 98);
  console.log(`Question: ${number}`);
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

for (let i = 1; i <= 3; i += 1) {
  const correctAnswer = gamePrime();
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
    if (i >= 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}`);
    break;
  }
}
