
// Finalizado :D

const readlineSync = require('readline-sync')

const contabilizeVotes = (voters, arr, candObjArr, candArr) => {
    for (let i = 0; i < voters; i++){
        for (let j = 0; j < 3; j++){
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
    return arr
}

const setupVotation = () => {

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

    return {arr: arr, candObjArr: candObjArr, voters: voters, candArr: candArr}

}

const verifyFunc = (voters, candNumber, result, candObj) => {
    for (let i = 0; i < voters;i++){
        for (let j = 0; j < candNumber; j++){
            if (result[i].rank[0] === candObj[j].candidato){
                candObj[j].votos += 1
            }
        }
    }
    for (let k = 0; k < candNumber; k++){
        if (candObj[k].votos > Math.round(voters / 2)){
            return {
                hasWinner: true,
                winner: candObj[k].candidato
            }
        }
    }
    return {
        hasWinner: false,
        winner: ''
    }
}

const winnerLoop = (result, voters, candObj, candNumber) => {
    let verifyWinner = verifyFunc(voters, candNumber, result, candObj)
    if (verifyWinner.hasWinner){
        console.log(verifyWinner.winner)
    }
    else {
        for (let i = 0; i < voters; i++){
            result[i].rank.shift()  
        }
        winnerLoop(result, voters, candObj, candNumber)
    }
}

const main = () => {

    console.log("Digite os candidatos separados por espaço. Ex: Ana Neymar Vini")

    let data = setupVotation()

    let candNumber = data.candArr.length

    let result = contabilizeVotes(data.voters, data.arr, data.candObjArr, data.candArr)

    winnerLoop(result, data.voters, data.candObjArr, candNumber)
    
}

main()


