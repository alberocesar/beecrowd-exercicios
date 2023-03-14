/**
 * Médias Ponderadas 1079 beecrowd
 * 
 * falta resolver!!!
 */

var input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    let [a,b, c] = lines[i].split(' ').map(item => parseFloat(item));
    var media = (a*2 + b*3 + c*5) / 10;
    console.log(media.toFixed(1));
}