/**
 * Médias Ponderadas 1079 beecrowd
 * 
 * falta resolver!!!
 */

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var n = parseInt(lines.shift());

for (var i = 0; i < n; i++) {
    var n1 = parseFloat(lines.shift());
    var n2 = parseFloat(lines.shift());
    var n3 = parseFloat(lines.shift());
    var media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    console.log(media.toFixed(1));
    }
