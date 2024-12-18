

//Para deixar algo interessante, pensei em colocar algo que retorna dois valores aleatorio
//Visando deixar o codigo um pouco mais aleatorio, e sempre dar ao usuario um rank Novo
//Esse codigo inicial vai gerar valores que vão permitir que o usuario seja classificado entre alguns dos ranks Listados.

let min = 0;
let max = 150;
let win1 = Math.floor(Math.random() * (max - min + 1)) + min;
let win2 = Math.floor(Math.random() * (max - min + 1)) + min;
let preResult = win1-win2

//Variavel que envia os primeiros parametros
let yourRank = rankify(win1, win2)

//Função que recebe parametro de vitoria e derrota.

function rankify(win, lose) {

    //A cima temos parametros e abaixo temos os parametros passados com o calculo de que vai determinar o rank

    let expression = win - lose
    //Vetor de Elos!
    let level = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Importal"]
    if (expression <= 10){
        expression = level[0]
    }else if(expression >= 11 && expression <= 20 ){
        expression = level[1]
    }else if(expression >= 21 && expression <= 50 ){
        expression = level[2]
    }else if(expression >= 51 && expression <= 80 ){
        expression = level[3]
    }else if(expression >= 81 && expression <= 90 ){
        expression = level[4]
    }else if(expression >= 91 && expression <= 100){
        expression = level[5]
    }else if(expression >= 101){
        expression = level[6]
    }else {
        expression = "Usuario Não Rankeado"
    }
    return expression
}

console.log("O Herói tem o saldo positivo de " + preResult  + " Vitorias e está no nível " + yourRank )


//    Se vitórias for menor do que 10 = Ferro
//    Se vitórias for entre 11 e 20 = Bronze
//    Se vitórias for entre 21 e 50 = Prata
//    Se vitórias for entre 51 e 80 = Ouro
//    Se vitórias for entre 81 e 90 = Diamante
//    Se vitórias for entre 91 e 100= Lendário
//    Se vitórias for maior ou igual a 101 = Imortal

//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"