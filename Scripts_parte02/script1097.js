/**
 * Sequencia Ij 3 1097 beecrowd
 */
var input = require('fs').readFileSync('./stdin', 'utf8');
var parada = 5;
var inicio = 7;

for (let i = 1; i <= 9; i += 2) {
    for (let j = inicio; j >= parada; j--) {
        console.log("I=" + i + " J=" + j);
    }
    inicio += 2;
    parada += 2;
}