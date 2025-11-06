/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
*/

// Solução (não requer prompt-sync)
console.log("--- 10 Primeiros Elementos da Sequência de Fibonacci ---");

const fibonacci = [];
let a = 1, b = 0, temp;

for (let i = 0; i < 10; i++) {
    fibonacci.push(a);
    temp = a;
    a = a + b;
    b = temp;
}

console.log(fibonacci.join(', '));

// A natureza deste exercício é de exibição direta, então não há uma variação com "dados fixos".
