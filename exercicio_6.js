/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Jogo de Adivinhação (Número de 1 a 5) ---");

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

const palpite = parseInt(prompt("Tente adivinhar o número sorteado (entre 1 e 5): "));

console.log(`O número sorteado foi: ${numeroSorteado}`);

if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou!");
} else {
    console.log("Que pena! Você errou.");
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function verificarPalpite(palpiteFixo, numeroSorteadoFixo) {
    const resultado = palpiteFixo === numeroSorteadoFixo ? "Acertou!" : "Errou.";
    return `Palpite: ${palpiteFixo}, Número Sorteado: ${numeroSorteadoFixo}. Resultado: ${resultado}`;
}

console.log(verificarPalpite(3, 3)); // Caso de acerto
console.log(verificarPalpite(4, 2)); // Caso de erro
console.log(verificarPalpite(1, 5)); // Caso de erro
