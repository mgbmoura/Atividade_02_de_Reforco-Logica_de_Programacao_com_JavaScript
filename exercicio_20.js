/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto: R$
Dedução INSS: R$
Salário líquido: R$
(Dicas: desconto de 12%, salário líquido é o bruto menos o desconto).
*/

// Solução com prompt-sync (para 3 funcionários, para não ser exaustivo)
const prompt = require('prompt-sync')();

console.log("--- Folha de Pagamento ---");

const totalFuncionarios = 3; // Reduzido para 3 para demonstração
const funcionarios = [];

for (let i = 0; i < totalFuncionarios; i++) {
    console.log(`\n--- Dados do ${i + 1}º Funcionário ---`);
    const matricula = prompt("Matrícula: ");
    const nome = prompt("Nome: ");
    const salarioBruto = parseFloat(prompt("Salário bruto: R$ "));

    if (!isNaN(salarioBruto)) {
        const deducaoINSS = salarioBruto * 0.12;
        const salarioLiquido = salarioBruto - deducaoINSS;
        funcionarios.push({ matricula, nome, salarioBruto, deducaoINSS, salarioLiquido });
    }
}

console.log("\n--- Contracheques ---");
funcionarios.forEach(func => {
    console.log("----------------------------------------");
    console.log(`Matrícula: ${func.matricula}`);
    console.log(`Nome: ${func.nome}`);
    console.log(`Salário bruto: R$ ${func.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${func.deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${func.salarioLiquido.toFixed(2)}`);
    console.log("----------------------------------------");
});

// Solução com dados fixos (simulando 3 funcionários)
console.log("\n--- Teste com Dados Fixos ---");

const tabelaFixa = [
    { matricula: "001", nome: "Carlos Silva", salario: 3500.00 },
    { matricula: "002", nome: "Ana Pereira", salario: 5200.00 },
    { matricula: "003", nome: "Bruno Costa", salario: 2800.00 }
];

tabelaFixa.forEach(func => {
    const inss = func.salario * 0.12;
    const liquido = func.salario - inss;
    console.log("----------------------------------------");
    console.log(`Matrícula: ${func.matricula}`);
    console.log(`Nome: ${func.nome}`);
    console.log(`Salário bruto: R$ ${func.salario.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${inss.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${liquido.toFixed(2)}`);
    console.log("----------------------------------------");
});
