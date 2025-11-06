/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.
*/

const prompt = require('prompt-sync')();

console.log("--- Contagem e Filtro de Elementos em uma Matriz 30x30 ---");

const LINHAS = 30;
const COLUNAS = 30;

// Para o exemplo, vamos gerar a matriz V com números aleatórios entre 1 e 10
const V = [];
for (let i = 0; i < LINHAS; i++) {
    V[i] = [];
    for (let j = 0; j < COLUNAS; j++) {
        V[i][j] = Math.floor(Math.random() * 10) + 1;
    }
}

console.log("Matriz V(30x30) foi gerada com números aleatórios de 1 a 10.");
// console.log(V.map(linha => linha.join('\t')).join('\n')); // Descomente para ver a matriz gerada

const A = parseInt(prompt("Digite um número inteiro A para buscar na matriz: "));

let contadorA = 0;
const X = []; // Este será um vetor com os elementos diferentes de A

if (isNaN(A)) {
    console.log("Entrada inválida.");
} else {
    for (let i = 0; i < LINHAS; i++) {
        for (let j = 0; j < COLUNAS; j++) {
            if (V[i][j] === A) {
                contadorA++;
            } else {
                X.push(V[i][j]);
            }
        }
    }

    console.log(`\nO valor ${A} aparece ${contadorA} vezes na matriz V.`);
    console.log("\nA matriz X, contendo todos os elementos de V diferentes de A, é:");
    console.log(`[${X.join(', ')}]`);
    console.log(`(Total de ${X.length} elementos)`);
}
