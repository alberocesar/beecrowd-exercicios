/**
 * par ou ímpar 1074 beecrowd
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = parseInt(line);
  let values = [];
  
  rl.on('line', (line) => {
    values.push(parseInt(line));
    
    if (values.length === n) {
      values.forEach(value => {
        if (value > 0 && value % 2 === 0) {
          console.log('EVEN POSITIVE');
        } else if (value > 0 && value % 2 !== 0) {
          console.log('ODD POSITIVE');
        } else if (value < 0 && value % 2 !== 0) {
          console.log('ODD NEGATIVE');
        } else if (value < 0 && value % 2 === 0) {
          console.log('EVEN NEGATIVE');
        } else {
          console.log('NULL');
        }
      });
      
      rl.close();
    }
  });
});
