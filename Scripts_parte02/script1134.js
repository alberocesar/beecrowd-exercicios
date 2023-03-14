/**
 * Tipo de Combustível 1134 beecrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const lines = input.split('\n');

let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (true) {
  const type = Number(lines.shift());

  if (type === 1) {
    alcool++;
  } else if (type === 2) {
    gasolina++;
  } else if (type === 3) {
    diesel++;
  } else if (type === 4) {
    break;
  }
}

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);