/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

console.log("--- Multiplicação da Diagonal Principal pela Média da Secundária ---");

const TAMANHO = 3;

// Para o exemplo, vamos gerar a matriz com números de 1 a 9
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
/*
// Para ler a matriz do usuário:
const matriz = [];
const prompt = require('prompt-sync')();
for (let i = 0; i < TAMANHO; i++) {
    matriz[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
        matriz[i][j] = parseInt(prompt(`Digite o elemento M[${i+1}][${j+1}]: `));
    }
}
*/

console.log("Matriz 3x3 original:");
matriz.forEach(linha => console.log(linha.join('\t')));

// Calcular a soma dos elementos da diagonal secundária
let somaDiagonalSecundaria = 0;
for (let i = 0; i < TAMANHO; i++) {
    somaDiagonalSecundaria += matriz[i][TAMANHO - 1 - i];
}

// Calcular a média da diagonal secundária
const mediaDiagonalSecundaria = somaDiagonalSecundaria / TAMANHO;

// Multiplicar os elementos da diagonal principal pela média da secundária
const matrizResultado = JSON.parse(JSON.stringify(matriz)); // Copia a matriz
for (let i = 0; i < TAMANHO; i++) {
    matrizResultado[i][i] = matrizResultado[i][i] * mediaDiagonalSecundaria;
}

console.log(`\nA soma da diagonal secundária é: ${somaDiagonalSecundaria}`);
console.log(`A média da diagonal secundária é: ${mediaDiagonalSecundaria.toFixed(2)}`);

console.log("\nMatriz após multiplicar a diagonal principal pela média da secundária:");
matrizResultado.forEach(linha => console.log(linha.map(n => n.toFixed(2)).join('\t')));

