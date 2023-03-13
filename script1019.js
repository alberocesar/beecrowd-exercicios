var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let qtdSegundos = parseInt(input);

const valores = [3600, 60, 1];
const resultado = [];

for (let valor of valores) {
    const quantidade = parseInt(qtdSegundos / valor);
    qtdSegundos = qtdSegundos % valor;
    resultado.push(quantidade);
}

console.log(resultado.join(':'));