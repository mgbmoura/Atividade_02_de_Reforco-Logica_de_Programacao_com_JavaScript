/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Redução de Tempo de Vida (Fumante) ---");

const cigarrosPorDia = parseInt(prompt("Quantidade de cigarros fumados por dia: "));
const anosFumando = parseInt(prompt("Anos que já fumou: "));

const totalCigarros = cigarrosPorDia * anosFumando * 365;
const minutosPerdidos = totalCigarros * 10;
const diasPerdidos = minutosPerdidos / (24 * 60);

console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(0)} dias de vida.`);

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function calcularPerdaDeVida(cigarros, anos) {
    const dias = (cigarros * 10 * 365 * anos) / (24 * 60);
    return dias.toFixed(0);
}

const caso1 = { cigarros: 20, anos: 10 }; // 20 cigarros/dia por 10 anos
const diasPerdidos1 = calcularPerdaDeVida(caso1.cigarros, caso1.anos);
console.log(`Caso 1: Fumando ${caso1.cigarros} cigarros por dia durante ${caso1.anos} anos, você perderá ${diasPerdidos1} dias de vida.`);

const caso2 = { cigarros: 5, anos: 30 }; // 5 cigarros/dia por 30 anos
const diasPerdidos2 = calcularPerdaDeVida(caso2.cigarros, caso2.anos);
console.log(`Caso 2: Fumando ${caso2.cigarros} cigarros por dia durante ${caso2.anos} anos, você perderá ${diasPerdidos2} dias de vida.`);
