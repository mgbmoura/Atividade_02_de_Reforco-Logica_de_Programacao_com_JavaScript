/*
47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados.
*/

console.log("--- Transformar Valores de um Objeto ---");

const objetoOriginal = {
    a: 1,
    b: 2,
    c: 3
};

// Função que será aplicada a cada valor do objeto
function dobrar(valor) {
    return valor * 2;
}

function transformarObjeto(obj, funcaoDeTransformacao) {
    const novoObjeto = {};

    for (const chave in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, chave)) {
            // Aplica a função de transformação ao valor da propriedade
            // e atribui o resultado à mesma chave no novo objeto.
            novoObjeto[chave] = funcaoDeTransformacao(obj[chave]);
        }
    }

    return novoObjeto;
}

console.log("Objeto Original:", objetoOriginal);
console.log("Função de Transformação: dobrar o valor");

const objetoTransformado = transformarObjeto(objetoOriginal, dobrar);

console.log("\nObjeto Transformado:");
console.log(objetoTransformado);
// Resultado esperado: { a: 2, b: 4, c: 6 }

// Exemplo com outra função: transformar em string
const objetoEmStrings = transformarObjeto(objetoOriginal, (val) => `Valor: ${val}`);
console.log("\nObjeto Transformado em Strings:");
console.log(objetoEmStrings);
