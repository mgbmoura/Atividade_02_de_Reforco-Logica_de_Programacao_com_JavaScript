/*
39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

console.log("--- Compactador de Vetor ---");

const TAMANHO = 100;

// Para o exemplo, vamos gerar um vetor A com valores aleatórios (positivos, negativos e nulos)
const A = [];
for (let i = 0; i < TAMANHO; i++) {
    // Gera números entre -50 e 49
    const numero = Math.floor(Math.random() * 100) - 50;
    A.push(numero);
}

console.log("Vetor A original (100 posições):");
console.log(`[${A.join(', ')}]`);

const B = [];

// Compacta o vetor A para o vetor B
for (let i = 0; i < A.length; i++) {
    // A condição é que o valor seja > 0 (não nulo e não negativo)
    if (A[i] > 0) {
        B.push(A[i]);
    }
}

console.log("\n--- Vetor Compactado ---");
console.log("Vetor B (contendo apenas os valores positivos de A):");
console.log(`[${B.join(', ')}]`);
console.log(`Tamanho do vetor B: ${B.length} posições.`);
