
// Ainda não finalizado

const readlineSync = require('readline-sync')

console.log("Digite os candidatos separados por espaço. Ex: Ana Neymar Vini")

let candResp = readlineSync.question('Candidatos: ')
let cand = candResp.toLowerCase()
let candArr = cand.split(" ")

let candObjArr = []

candArr.forEach(element => {
    obj = {
        candidato: element,
        votos: 0
    }
    candObjArr.push(obj)
})


let voters = readlineSync.question('Numbers of voters: ')

let arr = []

for (let i = 0; i < voters; i++){
    obj = {
        voter: i,
        rank: []
    }
    arr.push(obj)
}

for (let i = 0; i < voters; i++){
    for (let j = 0; j <= 2;j++){
        let vote = readlineSync.question(`Rank ${j+1}: `)
        let cleanVote = vote.toLowerCase()
        if (!candArr.includes(cleanVote)){
            console.log("Candidato Inválido")
            return
        }
        let ranque = arr[i].rank
        ranque.push(cleanVote)
    }
    console.log(" ")
}


for (let i = 0; i <= 2; i++){
    arr.forEach(element => {
        if (element.rank[i] === candObjArr[i].candidato){
            candObjArr[i].votos += 1
        }
    })
    candObjArr.forEach(element => {
        if (element.votos > Math.round(voters / 2)){
            return console.log(element.candidato)
        }
    })
}