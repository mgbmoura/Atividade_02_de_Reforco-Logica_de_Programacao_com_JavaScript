/*
45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array.
*/

console.log("--- Contagem de Frequência de Strings ---");

const frutas = ["maçã", "banana", "laranja", "maçã", "uva", "banana", "maçã"];

function contarFrequencia(arr) {
    const contagem = {};

    // Itera sobre cada item do array
    for (const item of arr) {
        // Se a chave (item) já existe no objeto, incrementa o valor.
        // Se não existe, cria a chave com o valor 1.
        if (contagem[item]) {
            contagem[item]++;
        } else {
            contagem[item] = 1;
        }
    }

    return contagem;
}

console.log("Array de entrada:", frutas);

const frequenciaFrutas = contarFrequencia(frutas);

console.log("\nObjeto com a contagem de frequência:");
console.log(frequenciaFrutas);
// Resultado esperado: { maçã: 3, banana: 2, laranja: 1, uva: 1 }
