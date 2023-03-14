/**
 * Validação de Nota 1117 beecrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const lines = input.split('\n');

let sum = 0;
let count = 0;

while (count < 2) {
  const note = Number(lines.shift());

  if (note < 0 || note > 10) {
    console.log('nota invalida');
  } else {
    sum += note;
    count++;
  }
}

const average = sum / 2;
console.log(`media = ${average.toFixed(2)}`);
