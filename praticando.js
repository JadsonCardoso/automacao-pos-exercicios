// let nome = "Jadson"
// let alerta = "Atenção"
// let falha = "Deu ruim"

// console.log(nome)
// console.warn(alerta)
// console.error(falha)
// console.log("Tester")
// console.warn("Alert 2")
// console.error("Deu ruimm dois")

// console.table([{
//     nome_2: 'Yasmin',
//     idade: 21,
//     profissao: "Administradora"
// }, {
//     nome_2: 'Jadson',
//     idade: 28,
//     profissao: 'QA Enginerr'
// }])

// const objeto = [{ // OBJETOS E ARRAYS criados com CONST, seus valores podem ser alterados
//     nome_2: 'Ana',
//     idade: 21,
//     profissao: "Administradora",
// }, {
//     nome_2: 'Pedro',
//     idade: 28,
//     profissao: 'QA Enginerr'
// }]
// console.log(objeto)

const nome = "Teste"
let data = "23 de Abril 2025"

console.log('Olá ' + nome + ' Você está praticando JS no dia ' + data)
console.log(`Olá ${ nome } você está praticando JS no dia ${ data }`)

console.log(data.length) // Contando a quantidade de caracteres da variável data

const nomesAlunos = "Jadson Fernando Bruno"
const nomesAlunos2 = nomesAlunos.split(" ") // Separa a sting de acordo com a regra definida, nesse caso a regra é " "
console.log(nomesAlunos2)