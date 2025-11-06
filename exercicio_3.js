/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Preço de Passagem ---");

const distancia = parseFloat(prompt("Qual a distância da viagem (Km)? "));

let precoPassagem;

if (distancia <= 200) {
    precoPassagem = distancia * 0.50;
} else {
    precoPassagem = distancia * 0.45;
}

console.log(`A distância da sua viagem é ${distancia} Km.`);
console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}`);

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function calcularPreco(km) {
    const preco = km <= 200 ? km * 0.50 : km * 0.45;
    return `Distância: ${km} Km. Preço: R$ ${preco.toFixed(2)}`;
}

console.log(calcularPreco(150)); // Viagem curta
console.log(calcularPreco(200)); // Viagem no limite
console.log(calcularPreco(300)); // Viagem longa
