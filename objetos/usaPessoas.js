const Pessoa = require('./pessoas/Pessoa');

const x = new Pessoa();

let resposta = x.setNome('Leandro Vaguetti');
console.log(resposta);

if (resposta) {
  console.log(x.getNome());
} else {
  console.log("Nome vazio");
}

resposta = x.setEmail('vaguetti@gmail.com');

console.log(resposta);

if (resposta) {
  console.log(x.getEmail());
} else {
  console.log("E-mail vazio");
}

resposta = x.setIdade(20);

console.log(resposta);

if (resposta) {
  console.log(x.getIdade());
} else {
  console.log("Idade vazia");
}