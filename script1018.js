var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    const quantidade = parseInt(valor / nota);
    valor = valor % nota;
    console.log(`${quantidade} nota(s) de R$ ${nota},00`);
}