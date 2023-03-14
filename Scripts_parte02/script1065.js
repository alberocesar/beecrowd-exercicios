/**
 * Pares entre Cinco Números 1065 beecrowd
 */

var input = require("fs").readFileSync("stdin", "utf8");

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const valores = input.split("\n");

let pares = 0;

for (let i = 0; i < 5; i++) {
  const valor = parseInt(valores[i]);

  if (valor % 2 === 0) {
    pares++;
  }
}

console.log(`${pares} valores pares`);


