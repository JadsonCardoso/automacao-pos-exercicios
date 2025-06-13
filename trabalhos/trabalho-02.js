function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++
        }
    }

    return contador
}


console.log(contarVogais("oie")) 