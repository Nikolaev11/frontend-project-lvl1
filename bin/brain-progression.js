#!/usr/bin/node
import greeting from '../src/cli.js';
import gameProgression from '../games/gameProgression.js';
import palyGame from '../src/index.js';

const name = greeting();
console.log('What number is missing in the progression?');
palyGame(name, gameProgression);
