#!/usr/bin/node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

function gameGCD() {
  let multi = 1 + Math.floor(Math.random() * 8);
  const num1 = multi * (1 + Math.floor(Math.random() * 12));
  const num2 = multi * (1 + Math.floor(Math.random() * 12));
  console.log(`Question: ${num1} ${num2}`);
  for (let i = Math.min(num1, num2); i >= 1; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      multi = i;
      break;
    }
  }
  return multi;
}

for (let i = 1; i <= 3; i += 1) {
  const correctAnswer = gameGCD();
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
