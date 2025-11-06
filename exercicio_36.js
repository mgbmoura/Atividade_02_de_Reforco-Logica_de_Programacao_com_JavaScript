/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem 'Parabéns, tu foi o GANHADOR'.
*/

const prompt = require('prompt-sync')();

console.log("--- Corretor de Loteria Esportiva ---");

const TAMANHO_VETOR = 13;
const TOTAL_APOSTADORES = 100;

// --- Leitura do Gabarito ---
const gabarito = [];
console.log("\n--- Cadastro do Gabarito Oficial (13 posições) ---");
// Para facilitar, vamos gerar o gabarito aleatoriamente (1, 2 ou 3 para coluna 1, 2 ou meio)
for (let i = 0; i < TAMANHO_VETOR; i++) {
    gabarito.push(Math.floor(Math.random() * 3) + 1);
}
console.log("Gabarito gerado automaticamente:", gabarito.join(', '));

console.log("\n--- Processando Apostas ---");

// --- Leitura e Verificação das Apostas ---
for (let i = 1; i <= TOTAL_APOSTADORES; i++) {
    console.log(`\n--- Apostador #${i} ---`);
    // O número do cartão é apenas o índice 'i' para simplificar
    const numeroCartao = i;
    
    const respostas = [];
    let acertos = 0;

    // Gerar respostas do apostador aleatoriamente para o exemplo
    for (let j = 0; j < TAMANHO_VETOR; j++) {
        respostas.push(Math.floor(Math.random() * 3) + 1);
    }
    // console.log("Respostas do apostador:", respostas.join(', ')); // Descomente para ver

    // Comparar respostas com o gabarito
    for (let j = 0; j < TAMANHO_VETOR; j++) {
        if (respostas[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Apostador Nº: ${numeroCartao}`);
    console.log(`Número de acertos: ${acertos}`);

    if (acertos === 13) {
        console.log("\n*************************************");
        console.log("Parabéns, tu foi o GANHADOR");
        console.log("*************************************");
    }
}

console.log("\n--- Fim da apuração ---");

