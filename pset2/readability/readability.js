const regexLetter = /\w/g
const regexSentence = /[\.\!\?]/g

const calculator = (text) => {
    let textArray = text.split("")
    let letters = text.match(regexLetter)
    let words = 1
    textArray.forEach(element => {
        if (element === ' '){
            words++
        }  
    })
    let sentences = 0
    textArray.forEach(element => {
        if (element.match(regexSentence)){
            sentences++
        }  
    })
    return {
        letters: letters.length,
        words: words,
        sentences: sentences
    }
}

const formula = (data) => {
    let l = ((data.letters / data.words) * 100)
    let s = ((data.sentences / data.words) * 100)
    let index = Math.round(0.0588 * l - 0.296 * s - 15.8)
    if (index > 16){
        return '16+'
    }
    return index
}

const main = (text) => {

    let data = calculator(text)
    let index = formula(data)

    console.log(`Text: ${text}`)
    if (index < 1){
        return console.log(`Before Grade 1`)
    }
    console.log(`Grade: ${index}`)
}
main("Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.")