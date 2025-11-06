/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

// Solução (não requer prompt-sync)
console.log("--- Ordenação de Vetor com Números Aleatórios ---");

const vetor = new Array(20);
for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * 100); // Números entre 0 e 99
}

console.log("Vetor original:");
console.log(vetor.join(', '));

vetor.sort((a, b) => a - b); // Ordena em ordem crescente

console.log("\nVetor ordenado:");
console.log(vetor.join(', '));
