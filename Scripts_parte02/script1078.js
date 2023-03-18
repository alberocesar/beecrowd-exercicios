/**
 * Tabuada 1078 - 
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valor = parseInt(input);

for (var i = 1; i <= 10; i++) {
    console.log(`${i} x ${valor} = ${i * valor}`);
    }