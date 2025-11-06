/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos.
*/

console.log("--- Combinar Objetos com Precedência ---");

const obj1 = {
    a: 1,
    b: 2,
    c: "olá"
};

const obj2 = {
    b: 3, // Conflito com obj1
    c: "mundo", // Conflito com obj1
    d: 4
};

function combinarObjetos(objeto1, objeto2) {
    // O operador spread (...) cria um novo objeto.
    // Primeiro, ele copia as propriedades de objeto1.
    // Em seguida, copia as propriedades de objeto2. Se houver chaves iguais,
    // as de objeto2 sobrescrevem as de objeto1.
    return { ...objeto1, ...objeto2 };
}

console.log("Objeto 1:", obj1);
console.log("Objeto 2:", obj2);

const objetoCombinado = combinarObjetos(obj1, obj2);

console.log("\nObjeto Combinado (obj2 tem precedência):");
console.log(objetoCombinado);
// Resultado esperado: { a: 1, b: 3, c: "mundo", d: 4 }
