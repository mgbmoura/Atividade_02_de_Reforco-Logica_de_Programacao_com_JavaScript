/*
41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade.
*/

console.log("--- Manipulação de Objeto Pessoa ---");

// Objeto inicial
const pessoa = {
    nome: "Carlos",
    idade: 30
};

// Acessando e imprimindo a idade
console.log("Idade original:", pessoa.idade);

// Adicionando a nova propriedade
pessoa.email = "carlos@exemplo.com";

// Imprimindo o objeto completo
console.log("\nObjeto pessoa após adicionar o email:");
console.log(pessoa);
