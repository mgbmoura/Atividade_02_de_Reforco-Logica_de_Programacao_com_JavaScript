/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 * alt - 58 e, para mulheres, peso ideal = 62.1 * alt - 44.7.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Peso Ideal ---");

function calcularPesoIdeal(alt, sexo) {
    if (sexo.toLowerCase() === 'm') {
        return 72.7 * alt - 58;
    } else if (sexo.toLowerCase() === 'f') {
        return 62.1 * alt - 44.7;
    } else {
        return null; // Sexo inválido
    }
}

const altura = parseFloat(prompt("Digite a altura (em metros): "));
const sexo = prompt("Digite o sexo (m/f): ");

const peso = calcularPesoIdeal(altura, sexo);

if (peso) {
    console.log(`Seu peso ideal é: ${peso.toFixed(2)} kg`);
} else {
    console.log("Sexo inválido. Use 'm' para masculino ou 'f' para feminino.");
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

console.log(`Peso ideal para homem de 1.80m: ${calcularPesoIdeal(1.80, 'm').toFixed(2)} kg`);
console.log(`Peso ideal para mulher de 1.65m: ${calcularPesoIdeal(1.65, 'f').toFixed(2)} kg`);
