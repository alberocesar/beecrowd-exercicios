/* Teste de seleção 1 */
let input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valores = input.split(' ');

const a = parseInt(valores.shift());
const b = parseInt(valores.shift());
const c = parseInt(valores.shift());
const d = parseInt(valores.shift());

if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}