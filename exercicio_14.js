/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Listagem de Nomes Invertida ---");

const nomes = [];
for (let i = 0; i < 7; i++) {
    nomes.push(prompt(`Digite o ${i + 1}º nome: `));
}

console.log("\nNomes na ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const nomesFixos = ["Ana", "Bia", "Carlos", "Daniel", "Eva", "Fabio", "Gabi"];
console.log("Nomes originais:", nomesFixos.join(', '));
console.log("Nomes invertidos:", [...nomesFixos].reverse().join(', '));
