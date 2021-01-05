#!/usr/bin/node
import greeting from '../src/cli.js';
import gameEven from '../games/gameEven.js';
import palyGame from '../src/index.js';

const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
palyGame(name, gameEven);
