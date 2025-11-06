/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

console.log("--- Corretor de Provas ---");

const NUM_QUESTOES = 20;
const NUM_ALUNOS = 50;
const NOTA_APROVACAO = 12;

// --- Leitura do Gabarito ---
const G = [];
const opcoes = ['A', 'B', 'C', 'D', 'E'];
console.log("\n--- Gabarito da Prova (20 questões) ---");
// Gerar gabarito aleatório para o exemplo
for (let i = 0; i < NUM_QUESTOES; i++) {
    G.push(opcoes[Math.floor(Math.random() * opcoes.length)]);
}
console.log("Gabarito gerado automaticamente:", G.join(' | '));

console.log("\n--- Corrigindo Provas dos Alunos ---");

// --- Leitura e Verificação das Respostas dos Alunos ---
for (let i = 1; i <= NUM_ALUNOS; i++) {
    // Para simplificar, o aluno será identificado pelo número (i)
    const alunoId = i;
    
    const R = []; // Vetor de respostas do aluno
    let acertos = 0;

    // Gerar respostas aleatórias para o aluno
    for (let j = 0; j < NUM_QUESTOES; j++) {
        R.push(opcoes[Math.floor(Math.random() * opcoes.length)]);
    }

    // Comparar respostas com o gabarito
    for (let j = 0; j < NUM_QUESTOES; j++) {
        if (R[j] === G[j]) {
            acertos++;
        }
    }

    console.log(`\n--- Aluno ${alunoId} ---`);
    // console.log("Respostas:", R.join('|')); // Descomente para ver as respostas
    console.log(`Número de acertos: ${acertos}`);

    if (acertos >= NOTA_APROVACAO) {
        console.log("Status: APROVADO");
    } else {
        console.log("Status: REPROVADO");
    }
}

console.log("\n--- Fim da correção ---");
