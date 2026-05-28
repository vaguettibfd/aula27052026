// Arquivo criado em projeto no www.stackblitz.com denominado usamodulo.js
// Arquivo criado na raiz do projeto

// importação dos módulos disponíveis
const oper = require('./biblioteca/definemodulo.js');

var x = 3, y = 5;

var a = oper.soma(x, y);
console.log(a);      // 8

console.log(oper.subtrair(y, x));  // 2

//console.log(oper.multiplicar(x,y));  // ERRO - Função Indisponível