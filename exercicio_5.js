/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Jogo de JoKenPo (Pedra-Papel-Tesoura) ---");

function jogar() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const computador = opcoes[Math.floor(Math.random() * opcoes.length)];
    
    console.log("\nEscolha: pedra, papel ou tesoura?");
    const jogador = prompt("> ").toLowerCase();

    if (!opcoes.includes(jogador)) {
        console.log("Opção inválida!");
        return;
    }

    console.log(`Computador escolheu: ${computador}`);
    console.log(`Você escolheu: ${jogador}`);

    if (jogador === computador) {
        console.log("Empate!");
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Você perdeu!");
    }
}

jogar();

// Demonstração com dados fixos (simulação de uma rodada)
console.log("\n--- Teste com Dados Fixos ---");

function simularRodada(jogador, computador) {
    const resultado = (jogador === computador) ? 'Empate' :
        ((jogador === 'pedra' && computador === 'tesoura') ||
         (jogador === 'papel' && computador === 'pedra') ||
         (jogador === 'tesoura' && computador === 'papel')) ? 'Vitória do Jogador' : 'Vitória do Computador';
    
    return `Jogador: ${jogador} vs Computador: ${computador} -> ${resultado}`;
}

console.log(simularRodada('pedra', 'tesoura'));
console.log(simularRodada('papel', 'pedra'));
console.log(simularRodada('tesoura', 'papel'));
console.log(simularRodada('pedra', 'pedra'));
console.log(simularRodada('papel', 'tesoura'));
