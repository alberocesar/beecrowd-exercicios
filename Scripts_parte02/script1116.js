/**
 * Dividindo x por y 1116 beecrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');
const lines = input.split('\n');

var item = parseInt(lines.shift())

for (let i = 0; i < item; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if (y === 0) {
        console.log('divisao impossivel');
    } else {
        const result = x / y;
        console.log(result.toFixed(1));
    }
}