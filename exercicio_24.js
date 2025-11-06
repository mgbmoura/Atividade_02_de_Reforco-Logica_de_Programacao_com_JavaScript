/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M.
*/

console.log("--- Contagem de Negativos por Linha na Matriz ---");

// Matriz 6x8 de exemplo com números positivos e negativos
const M = [
    [1, -2, 3, 4, -5, 6, 7, -8],
    [-1, 2, -3, 4, 5, -6, 7, 8],
    [1, 2, 3, -4, -5, -6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, -2, 3, -4, 5, -6, 7, -8],
    [0, 0, 1, 2, 3, 4, 5, 6] // Nnehum negativo
];

const C = []; // Vetor para armazenar a contagem de negativos

for (let i = 0; i < M.length; i++) {
    let contagemNegativos = 0;
    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            contagemNegativos++;
        }
    }
    C.push(contagemNegativos);
}

console.log("Matriz M (6x8):");
for (const linha of M) {
    console.log(linha.join('\t'));
}

console.log("\nVetor C (contagem de negativos por linha):");
console.log(C);

// Mostrando de forma mais descritiva
console.log("\nContagem detalhada:");
for(let i = 0; i < C.length; i++) {
    console.log(`Linha ${i + 1}: ${C[i]} elemento(s) negativo(s)`);
}
