/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor.
*/

console.log("--- Sumarizar Vendas por Vendedor ---");

const vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Ana", valor: 200 },
    { vendedor: "Maria", valor: 300 },
    { vendedor: "João", valor: 120 }
];

function sumarizarVendas(arrayDeVendas) {
    const sumario = {};

    for (const venda of arrayDeVendas) {
        const { vendedor, valor } = venda;

        // Se o vendedor já existe no sumário, soma o valor da venda atual.
        // Se não, cria a entrada para o vendedor com o valor da venda atual.
        if (sumario[vendedor]) {
            sumario[vendedor] += valor;
        } else {
            sumario[vendedor] = valor;
        }
    }

    return sumario;
}

console.log("Array de Vendas:", vendas);

const totalPorVendedor = sumarizarVendas(vendas);

console.log("\nTotal de vendas por vendedor:");
console.log(totalPorVendedor);
// Resultado esperado: { Ana: 300, João: 270, Maria: 300 }
