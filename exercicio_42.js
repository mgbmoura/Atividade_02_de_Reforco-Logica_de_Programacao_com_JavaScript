/*
42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays.
*/

console.log("--- Filtrar Propriedades que são Arrays ---");

const dados = {
    id: 123,
    nome: "Objeto Complexo",
    tags: ["javascript", "objeto", "array"],
    valores: [10, 20, 30],
    ativo: true,
    configuracoes: {
        tema: "escuro"
    },
    historico: ["criado", "modificado"]
};

function filtrarArrays(objetoDeEntrada) {
    const objetoDeSaida = {};
    for (const chave in objetoDeEntrada) {
        // Verifica se a propriedade pertence ao objeto (não ao seu protótipo)
        // e se o valor da propriedade é um array.
        if (Object.prototype.hasOwnProperty.call(objetoDeEntrada, chave) && Array.isArray(objetoDeEntrada[chave])) {
            objetoDeSaida[chave] = objetoDeEntrada[chave];
        }
    }
    return objetoDeSaida;
}

console.log("Objeto Original:");
console.log(dados);

const arraysDoObjeto = filtrarArrays(dados);

console.log("\nNovo Objeto (apenas com propriedades que são arrays):");
console.log(arraysDoObjeto);
