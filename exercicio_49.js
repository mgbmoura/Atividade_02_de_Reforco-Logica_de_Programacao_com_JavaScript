/*
49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

console.log("--- Agrupar Transações por Categoria ---");

const transacoes = [
    { id: 1, valor: 50.00, data: "2024-01-01", categoria: "Alimentação" },
    { id: 2, valor: 120.00, data: "2024-01-02", categoria: "Transporte" },
    { id: 3, valor: 75.50, data: "2024-01-03", categoria: "Alimentação" },
    { id: 4, valor: 300.00, data: "2024-01-04", categoria: "Moradia" },
    { id: 5, valor: 80.00, data: "2024-01-05", categoria: "Transporte" },
];

function agruparPorCategoria(listaDeTransacoes) {
    const resultado = {};

    for (const transacao of listaDeTransacoes) {
        const { categoria, valor } = transacao;

        // Se a categoria ainda não existe no objeto resultado, inicializa-a.
        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [], // Um array para guardar as transações
                subtotal: 0     // Um campo para o subtotal
            };
        }

        // Adiciona a transação atual ao array da sua categoria
        resultado[categoria].transacoes.push(transacao);

        // Soma o valor da transação ao subtotal da categoria
        resultado[categoria].subtotal += valor;
    }

    return resultado;
}

console.log("Array de Transações Original:", transacoes);

const transacoesAgrupadas = agruparPorCategoria(transacoes);

console.log("\nTransações Agrupadas por Categoria com Subtotal:");
console.log(JSON.stringify(transacoesAgrupadas, null, 2));
/*
Resultado esperado:
{
  "Alimentação": {
    "transacoes": [
      { "id": 1, "valor": 50, "data": "2024-01-01", "categoria": "Alimentação" },
      { "id": 3, "valor": 75.5, "data": "2024-01-03", "categoria": "Alimentação" }
    ],
    "subtotal": 125.5
  },
  "Transporte": {
    "transacoes": [
      { "id": 2, "valor": 120, "data": "2024-01-02", "categoria": "Transporte" },
      { "id": 5, "valor": 80, "data": "2024-01-05", "categoria": "Transporte" }
    ],
    "subtotal": 200
  },
  "Moradia": {
    "transacoes": [
      { "id": 4, "valor": 300, "data": "2024-01-04", "categoria": "Moradia" }
    ],
    "subtotal": 300
  }
}
*/
