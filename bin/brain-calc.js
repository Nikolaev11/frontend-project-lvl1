#!/usr/bin/node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

function gameAddition() {
  const terms = Math.floor(Math.random() * 100);
  const addends = Math.floor(Math.random() * 100);
  console.log(`Question: ${terms} + ${addends}`);
  return terms + addends;
}

function gameSubtraction() {
  const subtrahend = Math.floor(Math.random() * 100);
  const minuend = Math.floor(Math.random() * 100);
  console.log(`Question: ${subtrahend} - ${minuend}`);
  return subtrahend - minuend;
}

function gameMultiplication() {
  const multiplier = Math.floor(Math.random() * 100);
  const multiplicand = 2 + Math.floor(Math.random() * 7);
  console.log(`Question: ${multiplier} * ${multiplicand}`);
  return multiplier * multiplicand;
}

for (let i = 1; i <= 3; i += 1) {
  const selectMathOperation = Math.floor(Math.random() * 3);
  let correctAnswer;
  switch (selectMathOperation) {
    case 0:
      correctAnswer = gameAddition();
      break;
    case 1:
      correctAnswer = gameSubtraction();
      break;
    case 2:
      correctAnswer = gameMultiplication();
      break;
    default:
      correctAnswer = gameAddition();
  }
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
