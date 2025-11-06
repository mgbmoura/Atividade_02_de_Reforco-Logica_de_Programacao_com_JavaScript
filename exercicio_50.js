/*
50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
*/

console.log("--- Sistema de Reserva de Hotéis ---");

// --- Estrutura de Dados ---

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

// --- Funcionalidades ---

/**
 * Adiciona um novo hotel ao sistema.
 * @param {string} nome - O nome do hotel.
 * @param {string} cidade - A cidade onde o hotel está localizado.
 * @param {number} quartosTotais - O número total de quartos do hotel.
 */
function adicionarHotel(nome, cidade, quartosTotais) {
    const novoHotel = {
        id: proximoIdHotel++,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais // Inicialmente, todos os quartos estão disponíveis
    };
    hoteis.push(novoHotel);
    console.log(`Hotel "${nome}" adicionado com sucesso em ${cidade} com ${quartosTotais} quartos.`);
}

/**
 * Busca e lista hotéis disponíveis em uma cidade específica.
 * @param {string} cidade - A cidade para buscar hotéis.
 */
function buscarHoteisPorCidade(cidade) {
    console.log(`\n--- Hotéis disponíveis em ${cidade} ---`);
    const hoteisNaCidade = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase() && hotel.quartosDisponiveis > 0);

    if (hoteisNaCidade.length === 0) {
        console.log(`Nenhum hotel com quartos disponíveis encontrado em ${cidade}.`);
        return;
    }

    hoteisNaCidade.forEach(hotel => {
        console.log(`ID: ${hotel.id} | Nome: ${hotel.nome} | Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
    });
}

/**
 * Realiza a reserva de um quarto em um hotel para um cliente.
 * @param {number} idHotel - O ID do hotel onde a reserva será feita.
 * @param {string} nomeCliente - O nome do cliente.
 */
function fazerReserva(idHotel, nomeCliente) {
    const hotel = hoteis.find(h => h.id === idHotel);

    if (!hotel) {
        console.log(`Erro: Hotel com ID ${idHotel} não encontrado.`);
        return;
    }

    if (hotel.quartosDisponiveis === 0) {
        console.log(`Erro: Não há quartos disponíveis no hotel "${hotel.nome}".`);
        return;
    }

    hotel.quartosDisponiveis--;

    const novaReserva = {
        idReserva: proximoIdReserva++,
        idHotel: idHotel,
        nomeCliente: nomeCliente
    };
    reservas.push(novaReserva);

    console.log(`Reserva para ${nomeCliente} no hotel "${hotel.nome}" (ID da Reserva: ${novaReserva.idReserva}) realizada com sucesso!`);
}

/**
 * Cancela uma reserva existente.
 * @param {number} idReserva - O ID da reserva a ser cancelada.
 */
function cancelarReserva(idReserva) {
    const indiceReserva = reservas.findIndex(r => r.idReserva === idReserva);

    if (indiceReserva === -1) {
        console.log(`Erro: Reserva com ID ${idReserva} não encontrada.`);
        return;
    }

    const reservaCancelada = reservas.splice(indiceReserva, 1)[0];
    const hotel = hoteis.find(h => h.id === reservaCancelada.idHotel);

    if (hotel) {
        hotel.quartosDisponiveis++;
        console.log(`Reserva ${idReserva} para ${reservaCancelada.nomeCliente} no hotel "${hotel.nome}" foi cancelada.`);
    } else {
        // Isso não deveria acontecer em um sistema consistente
        console.log(`Erro crítico: Hotel associado à reserva ${idReserva} não encontrado.`);
    }
}

/**
 * Lista todas as reservas ativas no sistema.
 */
function listarReservas() {
    console.log("\n--- Lista de Todas as Reservas Ativas ---");

    if (reservas.length === 0) {
        console.log("Nenhuma reserva ativa no momento.");
        return;
    }

    reservas.forEach(reserva => {
        const hotel = hoteis.find(h => h.id === reserva.idHotel);
        if (hotel) {
            console.log(`ID Reserva: ${reserva.idReserva} | Cliente: ${reserva.nomeCliente} | Hotel: ${hotel.nome} | Cidade: ${hotel.cidade}`);
        }
    });
}

// --- Exemplo de Uso ---
console.log("\n--- Populando o sistema com dados iniciais ---");
adicionarHotel("Hotel Copacabana", "Rio de Janeiro", 10);
adicionarHotel("Hotel Ipanema", "Rio de Janeiro", 5);
adicionarHotel("Hotel Paulista", "São Paulo", 20);
adicionarHotel("Hotel Faria Lima", "São Paulo", 2);

// Buscando hotéis
buscarHoteisPorCidade("Rio de Janeiro");
buscarHoteisPorCidade("São Paulo");
buscarHoteisPorCidade("Belo Horizonte");

// Fazendo reservas
console.log("\n--- Fazendo algumas reservas ---");
fazerReserva(1, "João Silva"); // Reserva no Copacabana
fazerReserva(3, "Maria Souza"); // Reserva no Paulista
fazerReserva(1, "Carlos Pereira"); // Outra reserva no Copacabana
fazerReserva(4, "Ana Costa");    // Reserva no Faria Lima
fazerReserva(4, "Bruno Almeida"); // Reserva no Faria Lima
fazerReserva(4, "Fim da Vaga"); // Tentativa de reserva em hotel lotado

// Listando o estado atual
listarReservas();
buscarHoteisPorCidade("São Paulo"); // Verificando quartos disponíveis após reserva

// Cancelando uma reserva
console.log("\n--- Cancelando uma reserva ---");
cancelarReserva(2); // Cancelando a reserva de Maria Souza

// Verificando o estado final
listarReservas();
buscarHoteisPorCidade("São Paulo"); // Quartos no Paulista devem ter aumentado
