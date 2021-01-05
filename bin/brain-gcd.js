#!/usr/bin/node
import greeting from '../src/cli.js';
import gameGcd from '../games/gameGcd.js';
import palyGame from '../src/index.js';

const name = greeting();
console.log('Find the greatest common divisor of given numbers.');
palyGame(name, gameGcd);
