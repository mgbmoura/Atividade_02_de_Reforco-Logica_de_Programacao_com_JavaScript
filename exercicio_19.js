/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
*/

// Solução com prompt-sync
const prompt = require('prompt-sync')();

console.log("--- Leitura e Validação de 5 Horários ---");

const horarios = [];

function validarHorario(h, m, s) {
    return h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59;
}

for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;
    do {
        console.log(`\nDigite o ${i + 1}º horário (HH MM SS):`);
        const input = prompt("> ").split(" ");
        hora = parseInt(input[0]);
        minuto = parseInt(input[1]);
        segundo = parseInt(input[2]);

        if (!validarHorario(hora, minuto, segundo)) {
            console.log("Horário inválido! Tente novamente.");
        }
    } while (!validarHorario(hora, minuto, segundo));

    horarios.push({ hora, minuto, segundo });
}

console.log("\n--- Horários Válidos no Formato HH.MM.SS ---");
horarios.forEach(h => {
    const hh = String(h.hora).padStart(2, '0');
    const mm = String(h.minuto).padStart(2, '0');
    const ss = String(h.segundo).padStart(2, '0');
    console.log(`${hh}.${mm}.${ss}`);
});

// Solução com dados fixos para demonstração
console.log("\n--- Teste com Dados Fixos ---");

const horariosFixos = [
    { h: 10, m: 30, s: 5 },
    { h: 23, m: 59, s: 59 },
    { h: 0, m: 0, s: 0 },
    { h: 8, m: 5, s: 12 },
    { h: 15, m: 45, s: 33 }
];

console.log("Horários (fixos) formatados:");
horariosFixos.forEach(h => {
    console.log(`${String(h.h).padStart(2, '0')}.${String(h.m).padStart(2, '0')}.${String(h.s).padStart(2, '0')}`);
});
