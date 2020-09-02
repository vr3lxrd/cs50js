const readlineSync = require('readline-sync')

console.log("Digite os candidatos separados por espaço. Ex: Ana Neymar Vini")

let candResp = readlineSync.question('Candidatos: ')
let cand = candResp.toLowerCase()

let arr = []

let candidatosArr = cand.split(" ")
candidatosArr.forEach((element) => {
    let obj = {
        candidato: element,
        votos: 0
    }
    arr.push(obj)
})

let voters = readlineSync.question('Numbers of voters: ')

for (let i = 0; i < voters; i++){
    let votoResp = readlineSync.question(`Voto: `)
    let voto = votoResp.toLowerCase()
    for (let j = 0; j < arr.length;j++){
        if (voto === arr[j].candidato){
            arr[j].votos += 1
        }
    }
}

let maiorVoto = 0
let ganhador

for (let i = 0; i < arr.length; i++){
    if (arr[i].votos > maiorVoto){
        ganhador = arr[i].candidato
        maiorVoto = arr[i].votos
    }
}
console.log(ganhador)

