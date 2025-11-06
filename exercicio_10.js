/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Análise de Vários Números ---");

let somatorio = 0;
let menorValor = Infinity;
let quantidade = 0;
let pares = 0;
let continuar;

do {
    const numero = parseInt(prompt("Digite um número: "));

    if (!isNaN(numero)) {
        somatorio += numero;
        if (numero < menorValor) {
            menorValor = numero;
        }
        if (numero % 2 === 0) {
            pares++;
        }
        quantidade++;
    }

    continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
} while (continuar === 's');

if (quantidade > 0) {
    const media = somatorio / quantidade;
    console.log(`\n--- Resultados ---`);
    console.log(`a) Somatório: ${somatorio}`);
    console.log(`b) Menor valor: ${menorValor}`);
    console.log(`c) Média: ${media.toFixed(2)}`);
    console.log(`d) Valores pares: ${pares}`);
} else {
    console.log("Nenhum número foi digitado.");
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const numeros = [10, 5, 8, 12, 3, 20];
let somaFixa = 0;
let menorFixo = Infinity;
let paresFixo = 0;

numeros.forEach(num => {
    somaFixa += num;
    if (num < menorFixo) menorFixo = num;
    if (num % 2 === 0) paresFixo++;
});

const mediaFixa = somaFixa / numeros.length;

console.log(`Dados: ${numeros.join(', ')}`);
console.log(`a) Somatório: ${somaFixa}`);
console.log(`b) Menor valor: ${menorFixo}`);
console.log(`c) Média: ${mediaFixa.toFixed(2)}`);
console.log(`d) Valores pares: ${paresFixo}`);
