/**
 * Quadrado e ao Cubo - 1143
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const n = parseInt(input);

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}
