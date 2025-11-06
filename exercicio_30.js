/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados.
*/

console.log("--- Somas das Linhas e Colunas de uma Matriz 5x5 ---");

const TAMANHO = 5;

// Para o exemplo, vamos gerar uma matriz 5x5 com números de 1 a 25
const M = [];
let contador = 1;
for (let i = 0; i < TAMANHO; i++) {
    M[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
        M[i][j] = contador++;
    }
}

// Vetores para as somas
const SL = new Array(TAMANHO).fill(0); // Soma das Linhas
const SC = new Array(TAMANHO).fill(0); // Soma das Colunas

// Calcula as somas das linhas e colunas
for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

console.log("Matriz M(5,5) gerada:");
M.forEach(linha => console.log(linha.join('\t')));

console.log("\n--- Vetores com as Somas ---");
console.log("SL (Soma das Linhas):", SL);
console.log("SC (Soma das Colunas):", SC);
