/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Aluguel de Carros ---");

const tipoCarro = prompt("Tipo de carro (popular ou luxo): ").toLowerCase();
const diasAluguel = parseInt(prompt("Dias de aluguel: "));
const kmPercorridos = parseFloat(prompt("Km percorridos: "));

let custoTotal = 0;

if (tipoCarro === 'popular') {
    custoTotal += diasAluguel * 90;
    if (kmPercorridos <= 100) {
        custoTotal += kmPercorridos * 0.20;
    } else {
        custoTotal += kmPercorridos * 0.10;
    }
} else if (tipoCarro === 'luxo') {
    custoTotal += diasAluguel * 150;
    if (kmPercorridos <= 200) {
        custoTotal += kmPercorridos * 0.30;
    } else {
        custoTotal += kmPercorridos * 0.25;
    }
} else {
    console.log("Tipo de carro inválido.");
}

if (custoTotal > 0) {
    console.log(`Custo total do aluguel: R$ ${custoTotal.toFixed(2)}`);
}

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

function calcularAluguel(tipo, dias, km) {
    let custo = 0;
    if (tipo === 'popular') {
        custo = (dias * 90) + (km <= 100 ? km * 0.20 : km * 0.10);
    } else {
        custo = (dias * 150) + (km <= 200 ? km * 0.30 : km * 0.25);
    }
    return `Tipo: ${tipo}, Dias: ${dias}, Km: ${km}. Total: R$ ${custo.toFixed(2)}`;
}

console.log(calcularAluguel('popular', 5, 80));   // Popular, < 100km
console.log(calcularAluguel('popular', 3, 150));  // Popular, > 100km
console.log(calcularAluguel('luxo', 7, 180));     // Luxo, < 200km
console.log(calcularAluguel('luxo', 4, 250));     // Luxo, > 200km
