/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações.
*/

console.log("--- Multiplicação de Linhas pelo Elemento da Diagonal Principal ---");

const TAMANHO = 50;

// Para o exemplo, vamos gerar uma matriz 50x50 com números reais aleatórios
function gerarMatrizReal(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = parseFloat((Math.random() * 10).toFixed(2));
        }
    }
    return matriz;
}

const matriz = gerarMatrizReal(TAMANHO);

// É muito grande para mostrar a original, vamos direto para a lógica
console.log("Matriz 50x50 gerada. Iniciando a multiplicação...");

for (let i = 0; i < TAMANHO; i++) {
    // Pega o elemento da diagonal principal da linha atual
    const elementoDiagonal = matriz[i][i];

    // Multiplica cada elemento da linha i por esse valor
    for (let j = 0; j < TAMANHO; j++) {
        matriz[i][j] = matriz[i][j] * elementoDiagonal;
    }
}

console.log("\n--- Matriz Após as Multiplicações ---");
console.log("(Cada linha foi multiplicada pelo seu elemento da diagonal principal)");

// Função para formatar a impressão da matriz
function imprimirMatrizFormatada(matriz) {
    for (const linha of matriz) {
        console.log(linha.map(num => num.toFixed(2).padStart(8, ' ')).join(' '));
    }
}

// Descomente a linha abaixo para ver a matriz resultante (será muito grande)
// imprimirMatrizFormatada(matriz);

console.log("\nOperação concluída. A matriz foi modificada.");
console.log("Descomente o código para imprimir a matriz resultante de 50x50.");
