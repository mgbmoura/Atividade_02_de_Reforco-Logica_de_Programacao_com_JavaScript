/*
40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)
*/

console.log("--- Verificador de Apostas da Loto ---");

const NUM_ELEMENTOS = 5;
const NUM_APOSTAS = 50;

// --- Leitura do Resultado Oficial ---
const resultadoOficial = [];
console.log(`\n--- Cadastro do Resultado Oficial (${NUM_ELEMENTOS} números) ---`);
// Para o exemplo, vamos gerar o resultado aleatoriamente (números de 1 a 60)
while (resultadoOficial.length < NUM_ELEMENTOS) {
    const num = Math.floor(Math.random() * 60) + 1;
    if (!resultadoOficial.includes(num)) {
        resultadoOficial.push(num);
    }
}
// Ordenar para facilitar a comparação visual
resultadoOficial.sort((a, b) => a - b);
console.log("Resultado Oficial gerado:", resultadoOficial.join(' - '));

console.log("\n--- Processando Apostas ---");

// --- Leitura e Verificação das Apostas ---
let houveGanhador = false;

for (let i = 1; i <= NUM_APOSTAS; i++) {
    const aposta = [];
    // Gerar uma aposta aleatória para o exemplo
    while (aposta.length < NUM_ELEMENTOS) {
        const num = Math.floor(Math.random() * 60) + 1;
        if (!aposta.includes(num)) {
            aposta.push(num);
        }
    }
    // Ordenar para comparar
    aposta.sort((a, b) => a - b);

    // Compara a aposta com o resultado oficial
    // Uma forma fácil de comparar é transformar os arrays em strings
    const apostaStr = JSON.stringify(aposta);
    const resultadoStr = JSON.stringify(resultadoOficial);

    if (apostaStr === resultadoStr) {
        console.log(`\n!!! Aposta ${i} é uma GANHADORA! [${aposta.join(', ')}] !!!`);
        console.log("Parabéns, você acertou a quina!");
        houveGanhador = true;
    } else {
        // Apenas para visualização, mostra algumas apostas que não ganharam
        if (i % 10 === 0) { // Mostra a cada 10 apostas
             console.log(`Aposta ${i} [${aposta.join(', ')}] - Não ganhou.`);
        }
    }
}

console.log("\n--- Fim da apuração ---");
if (!houveGanhador) {
    console.log("Nenhuma aposta acertou a quina desta vez.");
}
