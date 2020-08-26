const readlineSync = require('readline-sync')
let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let alfabetoArr = alfabeto.split("")
const regex = /\w/g

const main = (key,plainText) => {
    let cleanKey = key.toLowerCase()
    let arr = plainText.split("")
    arr.forEach((element,index) => {
        if (!element.match(regex)){
            return
        }
        alfabetoArr.forEach((alf,index)=>{
            if (alf === element){
                return newIndex = index
            }
        })
        if (newIndex >= 26){
            newIndex = newIndex - 26
            arr[index] = cleanKey[newIndex]
            arr[index] = arr[index].toUpperCase()
        }
        else {
        arr[index] = cleanKey[newIndex]
        }
    })
    console.log(`Cypher text: ${arr.join("")}`)
}

let key = readlineSync.question('Key: ')
if (key === undefined){
    return console.log('Usage: ./substitution key')
}
if (key.length != 26){
    return console.log('Key must contain 26 characters.')
}   
let plainText = readlineSync.question('Plain text: ')


main(key,plainText)