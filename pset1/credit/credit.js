const companyVerify = (creditNumber) => {
    if (creditNumber[0] === '4'){
        return 'Visa'
    }
    if (creditNumber[0] === '5'){
        if (creditNumber[1] === '1' || creditNumber[1] === '2' || creditNumber[1] === '3' || creditNumber[1] === '4' || creditNumber[1] === '5'){
            return 'MasterCard'
        }
    }
    if (creditNumber[0] === '3'){
        if (creditNumber[1] === '4' || creditNumber[1] === '7'){
            return 'American Express'
        }
    }
    return 'INVALID'
}

const cardVerify = (creditNumber) => {

    let soma = 0
    let tempSoma = 0
    let numberArr = creditNumber.split("")
    numberArr.forEach((element,index) => {
        if (numberArr.length % 2 != 0){
            if (index % 2 == 1){
                let numero = parseInt(element) * 2
                if (numero >= 10){
                    let arr = Array.from(String(numero), Number)
                    numero = arr[0] + arr[1]
                }
                soma = soma + numero
            }
            else{
                let numero = parseInt(element)
                tempSoma = tempSoma + numero
            }
        }

        else {
            if (index % 2 == 0){
                let numero = parseInt(element) * 2
                if (numero >= 10){
                    let arr = Array.from(String(numero), Number)
                    numero = arr[0] + arr[1]
                }
                soma = soma + numero
            }
            else if ( index % 2 == 1 ){
                let numero = parseInt(element)
                tempSoma = tempSoma + numero
            }
        }

    });
    soma = soma + tempSoma
    if (soma % 10 === 0){
        return true
    }
    return false

}

const main = (creditNumber) => {

    if (creditNumber.length < 13 && creditNumber.length > 16){
        return;
    }

    let company = companyVerify(creditNumber)
    
    if (company === 'INVALID'){
        console.log('INVALID')
        return 1;
    }
    cardVerify(creditNumber)
    if (cardVerify){
        console.log(company)
        return 0
    }
    else{
        console.log('INVALID')
        return 1
    }      

}

// Os números dos cartões devem ser submetidos em string!
// The card number must be submitted in string format!

main("4003600000000014")
main("378282246310005")
main("2223000048400011")
main("5555555555554444")