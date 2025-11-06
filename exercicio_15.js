/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Identificador de Números Pares e Posições ---");

const numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
}

console.log("\nNúmeros pares digitados e suas posições:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número ${numeros[i]} na posição ${i}`);
    }
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const numerosFixos = [5, 8, 12, 3, 7, 10, 15, 20, 2, 9];
console.log("Números do vetor:", numerosFixos.join(', '));
console.log("Pares encontrados:");
numerosFixos.forEach((num, index) => {
    if (num % 2 === 0) {
        console.log(`Número ${num} na posição ${index}`);
    }
});
