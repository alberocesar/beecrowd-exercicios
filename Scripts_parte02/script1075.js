/**
 * Resto 2 1075 beecrowd
 */

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const N = parseInt(input);

for (let i = 1; i <= 10000; i++) {
    if (i % N === 2) {
        console.log(i);
    }
    }
