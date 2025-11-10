const printName = require('./nameModule');
const add = require('./addModule');
const math = require('./mathModule');
const writeData = require('./writeData');
const readData = require('./readData');
const log = require('./logger');
const countWords = require('./wordCounter');
const { getDate, getTime } = require('./dateUtils');
const randomBetween = require('./randomNumber');
const fileExists = require('./fileCheck');

printName();
console.log('Sum:', add(5, 3));
console.log('Multiply:', math.multiply(2, 4));

writeData('test.txt', 'Node.js is amazing!');
readData('test.txt');

log('Application started');
console.log('Word count:', countWords('Node.js makes backend fun!'));
console.log('Today:', getDate(), 'Time:', getTime());
console.log('Random Number:', randomBetween(10, 50));
console.log('File exists:', fileExists('test.txt'));
