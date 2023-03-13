var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var linhas = input.split('\n');

var [idItem1, qtdeItem1, valorItem1] = linhas.shift().split(' ');
var [idItem2, qtdeItem2, valorItem2] = linhas.shift().split(' ');

var valorTotalItem1 = qtdeItem1 * valorItem1;
var valorTotalItem2 = qtdeItem2 * valorItem2;

var valorTotal = valorTotalItem1 + valorTotalItem2;

console.log('VALOR A PAGAR: R$ ' + valorTotal.toFixed(2));