/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Verificador de Formação de Triângulo ---");

const a = parseFloat(prompt("Comprimento do primeiro segmento: "));
const b = parseFloat(prompt("Comprimento do segundo segmento: "));
const c = parseFloat(prompt("Comprimento do terceiro segmento: "));

if (a < b + c && b < a + c && c < a + b) {
    console.log("É possível formar um triângulo com esses segmentos.");
} else {
    console.log("Não é possível formar um triângulo com esses segmentos.");
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function podeFormarTriangulo(x, y, z) {
    const check = x < y + z && y < x + z && z < x + y;
    return `Segmentos ${x}, ${y}, ${z}: ${check ? 'Formam um triângulo.' : 'Não formam um triângulo.'}`;
}

console.log(podeFormarTriangulo(10, 12, 15)); // Forma
console.log(podeFormarTriangulo(5, 12, 13));  // Forma (triângulo retângulo)
console.log(podeFormarTriangulo(5, 8, 20));   // Não forma
