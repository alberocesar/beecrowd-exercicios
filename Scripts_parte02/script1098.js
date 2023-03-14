/**
 * Sequencia Ij 4 1098 beecrowd
 */
var input = require('fs').readFileSync('./stdin', 'utf8');

var i = 0;
var j = 1;

for (i = 0; i <= 2; i += 0.2) {
    for (j = 1; j <= 3; j++) {
        if (i % 1 == 0 || i == 0 ||i > 1.8) {
            console.log("I=" + i.toFixed(0) + " J=" + (j + i).toFixed(0));
        } else {
            console.log("I=" + i.toFixed(1) + " J=" + (j + i).toFixed(1));
        }
    }
}