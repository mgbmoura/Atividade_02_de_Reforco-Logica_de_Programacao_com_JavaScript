/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5].
*/

console.log("--- Produto Elemento a Elemento de Matrizes 3x5 ---");

// Matrizes de exemplo A e B (3x5)
const A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

const B = [
    [2, 3, 4, 5, 6],
    [1, 1, 1, 1, 1],
    [10, 9, 8, 7, 6]
];

// Matriz P para armazenar o produto
const P = [];

const LINHAS = 3;
const COLUNAS = 5;

for (let i = 0; i < LINHAS; i++) {
    P[i] = []; // Cria uma nova linha na matriz P
    for (let j = 0; j < COLUNAS; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

console.log("Matriz A:");
A.forEach(linha => console.log(linha.join('\t')));


console.log("\nMatriz B:");
B.forEach(linha => console.log(linha.join('\t')));


console.log("\nMatriz Produto P (Elemento a Elemento):");
P.forEach(linha => console.log(linha.join('\t')));

