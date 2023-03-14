/**
 * Fatorial Simples 1153 
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

let n = parseInt(input);

let fatorial = 1;

for(let i = 1; i <= n; i++) {
    fatorial *= i;
}

console.log(fatorial);