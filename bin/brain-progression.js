#!/usr/bin/node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

function gameProgression() {
  const progressionStep = 2 + Math.floor(Math.random() * 8);
  const progressionStart = Math.floor(Math.random() * 20);
  const progressionLength = 6 + Math.floor(Math.random() * 7);
  const targetStepNum = Math.floor(progressionLength * Math.random());
  const question = [];
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === targetStepNum) {
      question.push('..');
      result = progressionStart + i * progressionStep;
    } else {
      question.push(progressionStart + i * progressionStep);
    }
  }
  console.log(`Question: ${question.join(' ')}`);
  return result;
}

for (let i = 1; i <= 3; i += 1) {
  const correctAnswer = gameProgression();
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
