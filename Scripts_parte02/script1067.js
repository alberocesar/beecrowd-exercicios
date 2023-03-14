/**
 * Numeros ímpares 1067 beecrowd
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseInt(input);

for (var i = 1; i <= valor; i += 2) {
  console.log(i);
}