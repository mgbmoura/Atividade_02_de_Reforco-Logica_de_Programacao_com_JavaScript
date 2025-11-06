/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

console.log("--- Soma das Colunas de uma Matriz 15x20 ---");

const LINHAS = 15;
const COLUNAS = 20;

// Para não ter que digitar 300 números, vamos gerar a matriz aleatoriamente
function gerarMatrizAleatoria(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            // Gera números reais entre 1 e 10
            matriz[i][j] = parseFloat((Math.random() * 9 + 1).toFixed(2));
        }
    }
    return matriz;
}

const matriz = gerarMatrizAleatoria(LINHAS, COLUNAS);

// Vetor para armazenar a soma das colunas
const somaColunas = new Array(COLUNAS).fill(0);

// Calcula a soma de cada coluna
for (let j = 0; j < COLUNAS; j++) {
    for (let i = 0; i < LINHAS; i++) {
        somaColunas[j] += matriz[i][j];
    }
}

// Imprime a matriz (opcional, pois é grande)
/*
console.log("Matriz gerada (15x20):");
for (const linha of matriz) {
    console.log(linha.map(num => num.toFixed(2)).join('\t'));
}
*/

console.log("\n--- Soma de Cada Coluna ---");
for (let j = 0; j < somaColunas.length; j++) {
    console.log(`Soma da Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}
