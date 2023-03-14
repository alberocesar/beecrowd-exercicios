/**
 * Quadrado de Pares 1073 beecrowd
 */

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(`${i}^2 = ${Math.pow(i, 2)}`);
  }
}