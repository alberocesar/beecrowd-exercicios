/**
 * Seis Números Ímpares 1070 beecrowd
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseInt(input);

if (valor % 2 === 0) {
  valor++;
}

for (var i = 0; i < 6; i++) {
  console.log(valor);
  valor += 2;
}