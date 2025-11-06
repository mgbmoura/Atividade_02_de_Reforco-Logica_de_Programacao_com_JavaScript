/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias.
*/

const prompt = require('prompt-sync')();

console.log("--- Separador de Pares e Ímpares em Vetores de 5 Posições ---");

let pares = [];
let impares = [];

for (let i = 1; i <= 30; i++) {
    const valor = parseInt(prompt(`Digite o ${i}º de 30 valores: `));

    if (isNaN(valor)) {
        console.log("Valor inválido, ignorando.");
        i--; // Para repetir a leitura do mesmo número
        continue;
    }

    if (valor % 2 === 0) {
        // É par
        pares.push(valor);
        if (pares.length === 5) {
            console.log("\n>> Vetor de PARES cheio:", pares);
            pares = []; // Esvazia o vetor
        }
    } else {
        // É ímpar
        impares.push(valor);
        if (impares.length === 5) {
            console.log("\n>> Vetor de ÍMPARES cheio:", impares);
            impares = []; // Esvazia o vetor
        }
    }
}

console.log("\n--- Leitura Concluída --- ");
console.log("Conteúdo final dos vetores (o que sobrou):");

if (pares.length > 0) {
    console.log("Vetor de PARES final:", pares);
} else {
    console.log("Vetor de PARES final está vazio.");
}

if (impares.length > 0) {
    console.log("Vetor de ÍMPARES final:", impares);
} else {
    console.log("Vetor de ÍMPARES final está vazio.");
}
