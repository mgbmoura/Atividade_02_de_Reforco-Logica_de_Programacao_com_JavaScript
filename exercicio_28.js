/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

console.log("--- Soma dos Elementos Acima e Abaixo da Diagonal Principal ---");

const TAMANHO = 10;

// Para o exemplo, vamos gerar uma matriz 10x10 com números de 1 a 100
const matriz = [];
let contador = 1;
for (let i = 0; i < TAMANHO; i++) {
    matriz[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
        matriz[i][j] = contador++;
    }
}

console.log("Matriz 10x10 gerada:");
matriz.forEach(linha => console.log(linha.join('\t')));

let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < TAMANHO; i++) {
    for (let j = 0; j < TAMANHO; j++) {
        if (j > i) {
            // Elemento está acima da diagonal principal
            somaAcimaDiagonal += matriz[i][j];
        } else if (j < i) {
            // Elemento está abaixo da diagonal principal
            somaAbaixoDiagonal += matriz[i][j];
        }
        // Se j === i, o elemento está na diagonal principal e não é somado.
    }
}

console.log(`\nSoma dos elementos ACIMA da diagonal principal: ${somaAcimaDiagonal}`);
console.log(`Soma dos elementos ABAIXO da diagonal principal: ${somaAbaixoDiagonal}`);
