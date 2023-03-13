var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [A, B, C] = input.split(' ').map(item => parseFloat(item));

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(maiorABC + ' eh o maior');