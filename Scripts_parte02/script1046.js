/**
 * Tempo de jogo 1046 beecrowd
 */

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var inicio = parseInt(valores.shift());
var fim = parseInt(valores.shift());

if (inicio == fim) {
    console.log("O JOGO DUROU 24 HORA(S)");
} else if (inicio < fim) {
    console.log("O JOGO DUROU " + (fim - inicio) + " HORA(S)");
}
else {
    console.log("O JOGO DUROU " + (24 - inicio + fim) + " HORA(S)");
}