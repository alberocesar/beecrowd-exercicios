/**
 * Lanche 1038 beecrowd
 */

var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split(" ");

var codigo = parseInt(valores.shift());
var quantidade = parseInt(valores.shift());

switch (codigo) {
    case 1:
        console.log("Total: R$ " + (quantidade * 4.0).toFixed(2));
        break;
    case 2:
        console.log("Total: R$ " + (quantidade * 4.5).toFixed(2));
        break;
    case 3:
        console.log("Total: R$ " + (quantidade * 5.0).toFixed(2));
        break;
    case 4:
        console.log("Total: R$ " + (quantidade * 2.0).toFixed(2));
        break;
    case 5:
        console.log("Total: R$ " + (quantidade * 1.5).toFixed(2));
}