/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final.
*/

const prompt = require('prompt-sync')();

console.log("--- Multiplicação de Matriz por um Escalar ---");

const LINHAS = 6;
const COLUNAS = 6;

// Para o exemplo, vamos gerar uma matriz M(6,6) com valores de 1 a 36
const M = [];
let contador = 1;
for (let i = 0; i < LINHAS; i++) {
    M[i] = [];
    for (let j = 0; j < COLUNAS; j++) {
        M[i][j] = contador++;
    }
}

console.log("Matriz M(6,6) gerada:");
M.forEach(linha => console.log(linha.join('\t')));

// Leitura do valor A do usuário
const A = parseFloat(prompt("Digite o valor do escalar A para multiplicar a matriz: "));

// Vetor V que terá 36 posições
const V = [];

if (isNaN(A)) {
    console.log("Valor de A inválido. Encerrando o programa.");
} else {
    // Multiplica cada elemento de M por A e armazena em V
    for (let i = 0; i < LINHAS; i++) {
        for (let j = 0; j < COLUNAS; j++) {
            const resultado = M[i][j] * A;
            V.push(resultado);
        }
    }

    console.log(`\nVetor V (36 posições) - Resultado de M * ${A}:`);
    // Imprime o vetor V de forma clara
    console.log(`[${V.join(', ')}]`);
}
