var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var idFuncionario = parseInt(valores.shift());
var qtdeHorasTrabalhadas = valores.shift();
var valorHora = valores.shift();

var salario  = qtdeHorasTrabalhadas * valorHora;

console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));