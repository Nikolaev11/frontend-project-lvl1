#!/usr/bin/node
import greeting from '../src/cli.js';
import gamePrime from '../games/gamePrime.js';
import palyGame from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
palyGame(name, gamePrime);
