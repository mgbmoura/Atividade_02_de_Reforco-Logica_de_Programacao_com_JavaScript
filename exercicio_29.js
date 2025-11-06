/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

console.log("--- Somas em uma Matriz 5x5 ---");

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

// a) Soma da linha 4 (índice 3)
let somaLinha4 = 0;
for (let j = 0; j < TAMANHO; j++) {
    somaLinha4 += M[3][j];
}

// b) Soma da coluna 2 (índice 1)
let somaColuna2 = 0;
for (let i = 0; i < TAMANHO; i++) {
    somaColuna2 += M[i][1];
}

// c) Soma da diagonal principal
let somaDiagonalPrincipal = 0;
for (let i = 0; i < TAMANHO; i++) {
    somaDiagonalPrincipal += M[i][i];
}

// d) Soma de todos os elementos
let somaTotal = 0;
for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
        somaTotal += M[i][j];
    }
}

console.log("Matriz M(5,5) gerada:");
M.forEach(linha => console.log(linha.join('\t')));

console.log("\n--- Resultados das Somas ---");
console.log(`a) Soma da linha 4: ${somaLinha4}`);
console.log(`b) Soma da coluna 2: ${somaColuna2}`);
console.log(`c) Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`d) Soma de todos os elementos: ${somaTotal}`);

