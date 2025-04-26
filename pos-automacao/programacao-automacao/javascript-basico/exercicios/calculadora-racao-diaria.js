/* 
    Calculadore de ração diária

    receber o peso do DOG em KG
    Calcular KG mais o estoque atual em gramas
    Calcular quantidade diária de ração com base: Gramas dia = peso x 0.30 gramas

    Exiba: 
    Nome do dog
    Peso
    Quantidade de ração recomendada por dia
    Quantos dias o estoque atual vai durar
*/

// Feito por MIM

let nomeDog = 'Fredão'
let peso1 = 10
const quantidadeGramaDia = 30
let estoqueGramas = 5000
let gramasDia = 0
let duracao = 0

gramasDia = peso1 * quantidadeGramaDia
duracao = estoqueGramas / gramasDia

console.log("Informações do DOG")
console.log("Nome do dog: " + nomeDog)
console.log("Peso do dog: " + peso1 + " KG")
console.log("Quantidade de ração recomendada por dia:" + quantidadeGramaDia + " gramas")
console.log("Quantos dias o estoque atual vai dura:" + duracao + " dias")

// Feito em Aula
// ALTERNATIVA 1, simplificado sem função

const nome = `Mel`
const peso = 10
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramasPorDia}`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
  const gramasPorDia = peso * 30
  const duracaoEstoque = Math.floor(estoque / gramasPorDia)

  console.log(`----------------------`)
  console.log(`Nome do dog: ${nome}`)
  console.log(`Peso: ${peso}kg`)
  console.log(`Gramas por dia: ${gramasPorDia}g`)
  console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
  console.log(`----------------------`)
}

calcularConsumoDeRacao('Ada', 1, 2000)
calcularConsumoDeRacao('Laninha', 4.2, 15000)
calcularConsumoDeRacao('Pantera', 14.5, 5000)