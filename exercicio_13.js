/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.
*/

// Solução (não requer prompt-sync)
console.log("--- Vetor com os 15 Primeiros Elementos de Fibonacci ---");

const fibonacciVetor = new Array(15);

let a = 1, b = 0, temp;

for (let i = 0; i < 15; i++) {
    fibonacciVetor[i] = a;
    temp = a;
    a = a + b;
    b = temp;
}

console.log("Vetor preenchido:");
console.log(fibonacciVetor);

// A natureza deste exercício é de preenchimento e exibição, então não há uma variação com "dados fixos".
