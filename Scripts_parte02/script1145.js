/**
 * Sequencia logica 2 - 1145 beeCrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');
const [x, y] = input.split(' ').map(item => parseInt(item));

let acumulador = "";
for (let i = 1; i <= y; i++) {
    if (i % x !== 0) {
        acumulador += i + " ";
    } else if (i % x === 0 && i !== y) {
        acumulador += i + "\n";
    } else {
        acumulador += i;
    }
    }
console.log(acumulador);

