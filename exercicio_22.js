
/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00.
*/

const prompt = require('prompt-sync')();

function pesquisaHabitantes() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let contador = 0;
    let maiorSalario = 0;
    let salariosAte350 = 0;

    console.log("--- Pesquisa da Prefeitura ---");
    console.log("(Digite um salário negativo para encerrar)");

    while (true) {
        const salario = parseFloat(prompt(`Salário do ${contador + 1}º habitante: R$ `));

        if (salario < 0) {
            break;
        }

        const filhos = parseInt(prompt(`Número de filhos do ${contador + 1}º habitante: `));

        totalSalario += salario;
        totalFilhos += filhos;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            salariosAte350++;
        }

        contador++;
    }

    if (contador === 0) {
        return "Nenhum dado foi inserido.";
    }

    const mediaSalario = totalSalario / contador;
    const mediaFilhos = totalFilhos / contador;
    const percentualSalarioAte350 = (salariosAte350 / contador) * 100;

    return {
        mediaSalario: mediaSalario.toFixed(2),
        mediaFilhos: mediaFilhos.toFixed(2),
        maiorSalario: maiorSalario.toFixed(2),
        percentualSalarioAte350: percentualSalarioAte350.toFixed(2) + '%',
    };
}

const resultados = pesquisaHabitantes();

console.log("\n--- Resultados da Pesquisa ---");
console.log(resultados);
