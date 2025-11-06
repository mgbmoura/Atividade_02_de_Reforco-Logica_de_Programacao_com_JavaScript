/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada.
*/

console.log("--- Divisão de Linhas pelo Maior Elemento em Módulo ---");

const LINHAS = 12;
const COLUNAS = 13;

// Para o exemplo, vamos gerar a matriz com números aleatórios (incluindo negativos)
function gerarMatrizAleatoria(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            // Números entre -50 e 50
            matriz[i][j] = Math.floor(Math.random() * 101) - 50;
        }
    }
    return matriz;
}

const M = gerarMatrizAleatoria(LINHAS, COLUNAS);

// Cria uma cópia da matriz original para modificação
const M_modificada = JSON.parse(JSON.stringify(M));

for (let i = 0; i < LINHAS; i++) {
    // Encontra o maior elemento em módulo da linha
    let maiorEmModulo = 0;
    for (let j = 0; j < COLUNAS; j++) {
        if (Math.abs(M[i][j]) > maiorEmModulo) {
            maiorEmModulo = Math.abs(M[i][j]);
        }
    }

    // Se o maior módulo for 0, todos os elementos são 0, então não divide para evitar NaN.
    if (maiorEmModulo !== 0) {
        // Divide cada elemento da linha pelo maior em módulo
        for (let j = 0; j < COLUNAS; j++) {
            M_modificada[i][j] = M_modificada[i][j] / maiorEmModulo;
        }
    }
}

// Função para formatar a impressão da matriz
function imprimirMatriz(matriz, nome, casasDecimais = 0) {
    console.log(`\n--- ${nome} ---`);
    for (const linha of matriz) {
        console.log(linha.map(num => num.toFixed(casasDecimais)).join('\t'));
    }
}

imprimirMatriz(M, "Matriz Original");
imprimirMatriz(M_modificada, "Matriz Modificada (dividida pelo maior em módulo de cada linha)", 2);
