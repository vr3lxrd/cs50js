const mario = (andar) => {
    console.log(`Altura: ${andar}`)
    for (let i = 1; i <= andar; i++){
        console.log(" ".repeat(andar - i) + "#".repeat(i) + " " + "#".repeat(i))
    }
}
mario(6)
