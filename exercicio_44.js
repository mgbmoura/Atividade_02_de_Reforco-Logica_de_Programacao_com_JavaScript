/*
44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número.
*/

console.log("--- Contar Propriedades do Tipo String ---");

const exemploObjeto = {
    nome: "Produto A",
    id: 123,
    categoria: "Eletrônicos",
    disponivel: true,
    descricao: "Um ótimo produto",
    tags: ["novo", "em estoque"]
};

function contarStrings(obj) {
    let contador = 0;
    for (const chave in obj) {
        // Verifica se a propriedade é do próprio objeto e se seu valor é uma string
        if (Object.prototype.hasOwnProperty.call(obj, chave) && typeof obj[chave] === 'string') {
            contador++;
        }
    }
    return contador;
}

console.log("Objeto de Exemplo:", exemploObjeto);

const numeroDeStrings = contarStrings(exemploObjeto);

console.log(`\nO objeto tem ${numeroDeStrings} propriedades do tipo string.`);
// Esperado: 3 (nome, categoria, descricao)
