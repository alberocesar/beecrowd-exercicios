/**
 * Soma de Impares Consecutivos 1 1071 beecrowd
 * 
 */

let entrada = require('fs').readFileSync('/dev/stdin', 'utf8');
let valores = entrada.split('\n');

let x = parseInt(valores.shift());
let y = parseInt(valores.shift());

if (y < x) {
    [x, y] = [y, x]; // Troca os valores de x e y
}

let soma = 0;
for (let i = x + 1; i < y; i++) {
    if (i % 2 != 0) {
        soma += i;
    }
}

console.log(soma);
