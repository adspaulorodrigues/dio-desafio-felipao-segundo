// #Calculadora de partidas Rankeadas

//Declaração das variáveis
let quantidadeVitorias = 110
let quantidadeDerrotas = 5

let resCalcultation = calculation(quantidadeVitorias, quantidadeDerrotas)
let resClassification = classification(resCalcultation)

//# Saída esperada
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
console.log("O Herói tem saldo de " + resCalcultation + " está no nível de " + resClassification)

// Função para calcular resultado das vitorias - derrotas
function calculation(vitorias, derrotas){
    return vitorias - derrotas
}

/* Função para classificar o ranking 
    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal 
*/
function classification(pontos){
    let quantidadePontos = pontos

    switch(true){
        case quantidadePontos < 11:
            return "Ferro"
            break
        case quantidadePontos > 10 && quantidadePontos < 21:
            return "Bronze"
            break
        case quantidadePontos > 20 && quantidadePontos < 51:
            return "Prata"
            break
        case quantidadePontos > 50 && quantidadePontos < 81:
            return "Ouro"
            break
        case quantidadePontos > 80 && quantidadePontos < 91:
            return "Diamante"
            break
        case quantidadePontos > 90 && quantidadePontos < 101:
            return "Lendário"
            break
        default:
            return "Imortal"
    }
}





 