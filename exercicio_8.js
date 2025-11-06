/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Pontos e Dinheiro por Atividade Física ---");

const horas = parseInt(prompt("Horas de atividade física no mês: "));

let pontos = 0;

if (horas <= 10) {
    pontos = horas * 2;
} else if (horas <= 20) {
    pontos = horas * 5;
} else {
    pontos = horas * 10;
}

const dinheiro = pontos * 0.05;

console.log(`Você fez ${horas} horas de atividade.`);
console.log(`Total de pontos: ${pontos}`);
console.log(`Dinheiro ganho: R$ ${dinheiro.toFixed(2)}`);

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function calcularGanhos(h) {
    let p = 0;
    if (h <= 10) p = h * 2;
    else if (h <= 20) p = h * 5;
    else p = h * 10;
    const d = p * 0.05;
    return `Horas: ${h}, Pontos: ${p}, Dinheiro: R$ ${d.toFixed(2)}`;
}

console.log(calcularGanhos(8));   // Faixa 1
console.log(calcularGanhos(15));  // Faixa 2
console.log(calcularGanhos(25));  // Faixa 3
