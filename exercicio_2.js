/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Verificador de Multa de Velocidade ---");

const velocidade = parseInt(prompt("Qual a velocidade do carro (Km/h)? "));

if (velocidade > 80) {
    const kmAcima = velocidade - 80;
    const valorMulta = kmAcima * 5;
    console.log(`Você foi multado! A velocidade de ${velocidade} Km/h está acima do limite de 80 Km/h.`);
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite permitido. Boa viagem!");
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function verificarMulta(velocidade) {
    if (velocidade > 80) {
        const multa = (velocidade - 80) * 5;
        return `Velocidade: ${velocidade} Km/h. Multa: R$ ${multa.toFixed(2)}`;
    } else {
        return `Velocidade: ${velocidade} Km/h. Sem multa.`;
    }
}

console.log(verificarMulta(90));   // Caso de multa
console.log(verificarMulta(75));   // Caso sem multa
console.log(verificarMulta(110));  // Caso de multa
