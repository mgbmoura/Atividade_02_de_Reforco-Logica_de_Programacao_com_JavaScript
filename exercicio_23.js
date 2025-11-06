/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
*/

console.log("--- Matriz Identidade 7x7 ---");

const tamanho = 7;
const matrizIdentidade = [];

for (let i = 0; i < tamanho; i++) {
    matrizIdentidade[i] = []; // Cria uma nova linha
    for (let j = 0; j < tamanho; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

// Imprime a matriz formatada
for (let i = 0; i < tamanho; i++) {
    console.log(matrizIdentidade[i].join(' '));
}
