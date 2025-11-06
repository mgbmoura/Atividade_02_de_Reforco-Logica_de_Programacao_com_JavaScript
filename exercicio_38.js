/*
38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

const prompt = require('prompt-sync')();

console.log("--- Operações com Vetor ---");

const TAMANHO = 6;
const vetor = [];

console.log(`\nDigite os ${TAMANHO} elementos do vetor:`);
for (let i = 0; i < TAMANHO; i++) {
    const elemento = parseFloat(prompt(`Elemento ${i + 1}: `));
    if (isNaN(elemento)) {
        console.log("Entrada inválida. Usando 0.");
        vetor.push(0);
    } else {
        vetor.push(elemento);
    }
}

console.log("\nVetor lido:", vetor);

console.log("\nEscolha uma operação:");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordenar em ordem crescente");
console.log("5 - Mostrar o vetor");

const operacao = parseInt(prompt("Digite o número da operação desejada: "));

switch (operacao) {
    case 1:
        let soma = 0;
        for (const num of vetor) {
            soma += num;
        }
        console.log("\nResultado da Soma:", soma);
        break;

    case 2:
        let produto = 1;
        for (const num of vetor) {
            produto *= num;
        }
        console.log("\nResultado do Produto:", produto);
        break;

    case 3:
        let somaMedia = 0;
        for (const num of vetor) {
            somaMedia += num;
        }
        const media = somaMedia / vetor.length;
        console.log("\nResultado da Média:", media.toFixed(2));
        break;

    case 4:
        // A função sort() modifica o vetor original.
        // Para ordenar números corretamente, passamos uma função de comparação.
        vetor.sort((a, b) => a - b);
        console.log("\nVetor em Ordem Crescente:", vetor);
        break;

    case 5:
        console.log("\nMostrando o vetor:", vetor);
        break;

    default:
        console.log("\nOperação inválida. Programa encerrado.");
        break;
}
