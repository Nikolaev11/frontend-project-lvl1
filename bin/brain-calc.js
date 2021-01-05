#!/usr/bin/node
import greeting from '../src/cli.js';
import gameCalc from '../games/gameCalc.js';
import palyGame from '../src/index.js';

const name = greeting();
console.log('What is the result of the expression?');
palyGame(name, gameCalc);
