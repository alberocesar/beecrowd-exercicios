/**
 * Senha fixa 1114 - 
 */

var input = require('fs').readFileSync('./stdin', 'utf8');

const lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const password = parseInt(lines[i]);

    if (password === 2002) {
        console.log('Acesso Permitido');
        break;
    } else {
        console.log('Senha Invalida');
    }
}
