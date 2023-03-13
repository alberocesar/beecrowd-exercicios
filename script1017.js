var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [tempoGasto, velocidadeMedia] = input.split("\n");

const totalPercorrido = tempoGasto * velocidadeMedia;
const litrosNecessarios = totalPercorrido / 12;

console.log(litrosNecessarios.toFixed(3));