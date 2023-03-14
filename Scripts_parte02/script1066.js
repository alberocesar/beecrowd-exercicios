/**
 * pares, ímpares, positivos e negativos 1066 beecrowd
 */
const input = require("fs").readFileSync("/dev/stdin", "utf8");
const valores = input.split("\n").map(valor => parseInt(valor));

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 5; i++) {
  if (valores[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  if (valores[i] > 0) {
    positivos++;
  } else if (valores[i] < 0) {
    negativos++;
  }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);
