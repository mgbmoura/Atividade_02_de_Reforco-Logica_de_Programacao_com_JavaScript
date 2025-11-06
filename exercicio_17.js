/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Listagem de Pessoas Menores de Idade ---");

const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
    nomes.push(prompt(`Nome da ${i + 1}ª pessoa: `));
    idades.push(parseInt(prompt(`Idade da ${i + 1}ª pessoa: `)));
}

console.log("\nPessoas menores de idade:");
for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(`- Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const nomesFixos = ["Ana", "João", "Carla", "Pedro", "Maria", "José", "Sofia", "Lucas", "Lara"];
const idadesFixas = [25, 17, 30, 16, 22, 40, 12, 19, 15];

console.log("Menores de idade (dados fixos):");
for (let i = 0; i < idadesFixas.length; i++) {
    if (idadesFixas[i] < 18) {
        console.log(`- Nome: ${nomesFixos[i]}, Idade: ${idadesFixas[i]}`);
    }
}
