var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [distancia, combustivel] = input.split("\n");

const consumoMedio = distancia / combustivel;

console.log(consumoMedio.toFixed(3) + ' km/l');