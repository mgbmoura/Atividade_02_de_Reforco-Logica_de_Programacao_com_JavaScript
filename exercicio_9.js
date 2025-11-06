/*
9. Desenvolva um aplicativo que leia o salário и o sexo de vários funcionários. No final, mostre o total de salário pago aos homens и o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Calculadora de Salário Total por Sexo ---");

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = 's';

while (continuar.toLowerCase() === 's') {
    const salario = parseFloat(prompt("Salário do funcionário: R$ "));
    const sexo = prompt("Sexo do funcionário (m/f): ").toLowerCase();

    if (sexo === 'm') {
        totalSalarioHomens += salario;
    } else if (sexo === 'f') {
        totalSalarioMulheres += salario;
    } else {
        console.log("Sexo inválido. Funcionário não contabilizado.");
    }

    continuar = prompt("Deseja continuar? (s/n): ");
}

console.log(`\nTotal de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

// Solução com dados fixos
console.log("\n--- Teste com Dados Fixos ---");

const funcionarios = [
    { salario: 3000, sexo: 'm' },
    { salario: 4500, sexo: 'f' },
    { salario: 2500, sexo: 'm' },
    { salario: 6000, sexo: 'f' },
    { salario: 1800, sexo: 'm' }
];

let totalHomensFixo = 0;
let totalMulheresFixo = 0;

for (const func of funcionarios) {
    if (func.sexo === 'm') totalHomensFixo += func.salario;
    else totalMulheresFixo += func.salario;
}

console.log(`Total (fixo) Homens: R$ ${totalHomensFixo.toFixed(2)}`);
console.log(`Total (fixo) Mulheres: R$ ${totalMulheresFixo.toFixed(2)}`);
