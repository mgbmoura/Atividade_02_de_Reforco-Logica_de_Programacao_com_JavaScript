/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.
*/

console.log("--- Combinar Inventários de Lojas ---");

const inventarioLojaA = {
    "maçã": 10,
    "banana": 20,
    "laranja": 15
};

const inventarioLojaB = {
    "banana": 15,
    "uva": 25,
    "maçã": 5
};

function combinarInventarios(invA, invB) {
    // Começa criando uma cópia do primeiro inventário
    const inventarioCombinado = { ...invA };

    // Itera sobre o segundo inventário
    for (const item in invB) {
        if (Object.prototype.hasOwnProperty.call(invB, item)) {
            // Se o item já existe no inventário combinado, soma a quantidade.
            if (inventarioCombinado[item]) {
                inventarioCombinado[item] += invB[item];
            } else {
                // Se não existe, simplesmente adiciona o item com sua quantidade.
                inventarioCombinado[item] = invB[item];
            }
        }
    }

    return inventarioCombinado;
}

console.log("Inventário Loja A:", inventarioLojaA);
console.log("Inventário Loja B:", inventarioLojaB);

const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log("\nInventário Combinado:");
console.log(inventarioTotal);
// Resultado esperado: { maçã: 15, banana: 35, laranja: 15, uva: 25 }
