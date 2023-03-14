/**
 * PUM 1142 beecrowd
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const n = parseInt(input);

let count = 0;
for (let i = 1; i <= n; i++) {
  console.log(`${count+1} ${count+2} ${count+3} PUM`);
  count += 4;
}
