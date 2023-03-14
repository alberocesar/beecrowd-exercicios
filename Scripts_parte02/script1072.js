/**
 * intervalo 2 1072 beecrowd
 */

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

let n = parseInt(lines.shift());
let inside = 0;
let outside = 0;

for(let i = 0; i < n; i++) {
    let x = parseInt(lines.shift());
    if(x >= 10 && x <= 20) {
        inside++;
    } else {
        outside++;
    }
}

console.log(`${inside} in`);
console.log(`${outside} out`);