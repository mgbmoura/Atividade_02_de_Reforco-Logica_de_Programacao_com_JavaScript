/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Gerador de Progressão Aritmética (PA) ---");

const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
const razao = parseInt(prompt("Digite a razão da PA: "));

const pa = [];
let soma = 0;

console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
    const termo = primeiroTermo + i * razao;
    pa.push(termo);
    soma += termo;
}

console.log(pa.join(', '));
console.log(`A soma de todos os valores da sequência é: ${soma}`);


// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function gerarPA(termoInicial, r) {
    const sequencia = [];
    let somaSequencia = 0;
    for (let i = 0; i < 10; i++) {
        const termoAtual = termoInicial + i * r;
        sequencia.push(termoAtual);
        somaSequencia += termoAtual;
    }
    return `PA com início em ${termoInicial} e razão ${r}: [${sequencia.join(', ')}]. Soma: ${somaSequencia}`;
}

console.log(gerarPA(0, 2));   // PA de pares
console.log(gerarPA(5, 5));   // PA de múltiplos de 5
console.log(gerarPA(1, 3));   // Outra PA
