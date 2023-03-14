/**
 * Sequência logica 1144 - URI Online Judge | 1144
 */

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const n = parseInt(input);

for (let i = 1; i <= n; i++) {
  const num1 = i;
  const num2 = num1 ** 2;
  const num3 = num1 ** 3;
  console.log(`${num1} ${num2} ${num3}`);
  const num4 = num2 + 1;
  const num5 = num3 + 1;
  console.log(`${num1} ${num4} ${num5}`);
}
