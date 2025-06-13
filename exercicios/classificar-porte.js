
// Feito por mim
let nomeDog = 'Fredão'
let peso = 15
let porteClass = ''

const porteDog = () => {
    if (peso <= 10) {
        porteClass = 'P'
    } else {
        porteClass = 'M'
    }
    return porteClass // Passsei como retorno apenas o resultado da variáveis porteClass conforme a sua condição
}

console.log(`-----------------------------`)
console.log(`Nome: ${ nomeDog }`)
console.log(`peso ${ peso }`)
console.log(`Classifiação do dog:  ${ porteDog() }`) // chamando a função
console.log(`-----------------------------`)
