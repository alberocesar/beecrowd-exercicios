/**
 * Bob Conduite 1589
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

let t = input.split('\n');
let inteiro = t.shift();

for(let i = 0; i < inteiro; i++) {
    var array = t[i].split(' ').map(item => parseInt(item))
    let raio1 = array[0]
    let raio2 = array[1]
    let distancia = raio1 + raio2;

    console.log(distancia);
}