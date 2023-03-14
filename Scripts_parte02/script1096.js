/**
 * Sequencia Ij 2 1096 beecrowd
 */

var i = 1;
var j = 7;

while (i <= 9) {
    while (j >= 5) {
        console.log("I=" + i + " J=" + j);
        j--;
    }
    i += 2;
    j = 7;
}