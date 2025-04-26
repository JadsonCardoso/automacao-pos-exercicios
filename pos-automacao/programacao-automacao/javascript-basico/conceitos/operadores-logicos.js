/*

    && - E / AND
    || - OU / OR
    !  - NÃO / NOT

*/

// && - E / AND - As doisvalores devem serem VERDADEIRAS
const nomeDog = "Pipoca"

const nomePussuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

console.log(nomePussuiApenasUmaPalavra && nomePossuiAteDezCaracteres) // true
console.log(true && false) // false

// || - OU / OR - Uma dos valores deve ser VERDADEIRO
const dog = {
    adotado: false,
    peso: 5.3
}

console.log(true || true) // true
console.log(true || false) // true
console.log(true || true) // true
console.log(false || false) // true
console.log(!dog.adotado || dog.peso < 10) // true

// !  - NÃO / NOT - NEGAÇÃO DE VALOR
console.log(true) // true
console.log(!true) // false