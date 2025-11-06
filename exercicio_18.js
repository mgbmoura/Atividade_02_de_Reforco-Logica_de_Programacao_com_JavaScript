/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final imprima o resultado.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Registro de Funcionário ---");

const funcionario = {
    nome: prompt("Nome do funcionário: "),
    cargo: prompt("Cargo do funcionário: "),
    salario: parseFloat(prompt("Salário do funcionário: R$ "))
};

console.log("\n--- Dados do Funcionário ---");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const funcionarioFixo = {
    nome: "Maria Souza",
    cargo: "Desenvolvedora Web",
    salario: 5500.00
};

console.log("Dados do funcionário (fixo):");
console.log(funcionarioFixo);
