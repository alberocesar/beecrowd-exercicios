/**
 * Crescente e decrescente 1113 beecrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if (x === y) {
        break;
    }

    if (x < y) {
        console.log('Crescente');
    } else {
        console.log('Decrescente');
    }
}