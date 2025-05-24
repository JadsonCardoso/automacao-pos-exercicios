/*
* Console API 
*/

console.log("Aula inicial JS") // Usamos quando queremos alguma informação
console.error("Falha na execução")
console.warn("Atenção") // usado para alertas
console.table([{ // Usamos para Objetos
    nome: 'Jadson',
    turma: '02',
    disciplina: 'Prog JS'
},
{
    nome: 'Jadson QA',
    turma: '03',
    disciplina: 'Prog JSa'
}
])

/** 
* Constantes e Variáveis

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar.

**/

// Informações de um dog que não mudam. Toda criação de CONST DEVEMOS atribuir um valor de imediato. se não erro. 
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2022'
const porte = 'M'

// Informações que mudam

let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'


// hoisting -> içamento ou elevação 
// var é içado (hoisting) e inicializado com undefined. Independente do local Ele vai para o topo do escopo se tornando prioriedade 

// let e const também são içados, mas não inicializados — você não pode usá-los antes da declaração.
// É recomendo que usemos o LET ao invéis do VAR
// let
// const
// A inicialização da variavel é movida para o topo do arquivo com o valor undefined. 
// Se usa let quando o valor da variavel pode ser alterado, e const quando valor da variavel sera fixo durante a execução

/*
* Tipo de dados: cadadeia(string), inteiro e real(number), logico(Boolean) , vertor e matraiz(array)
                undefined(Quando variavel declarada estar sem valor)
                null(Valor que já foi definido, mas colocamos como nulo)
                BigInt(Number para números extremamente grandes)
                Symbol(Identificador único para uma variável)

*/
// a = 23 
// resultado = a + 2
// console.log(resultado)

/**
 * STRINGS
 */

// 'Turma 02 do PGATS' - aspas simples ou single quote
// "Turma 02 do PGATS" - aspas duplas ou double quate
// `Turma 02 do PGATS` - Template de string - Interpolação

const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da turma " + turma + " no Sábado dia 05 de Abril") // Concatenação com "+". Usamos tbm o "\n" para quebrar linha
console.log(`Aula 03 da Turma ${ turma } no Sábado dia ${ data }`)  // Com a "``" crase, usamos o "${valoraqui}" para concaternar com interpolação.

console.log(turma.length) // O LENGTH conta a quantidade de caracteres na variável. caso seja um vertor ele conta a quantidade de items

const nomeDeAlunos = "Jadson Fernando andré Lucas"
const nomeDeAlunosSplit = nomeDeAlunos.split(" ") // O SPLIT serapa a string de acordo com a regra que eu definir. No exemplo a regra é o " "
console.log(nomeDeAlunosSplit)

console.log(nomeDeAlunos.toLowerCase()) // para deixar tudo minuscúlo
console.log(nomeDeAlunos.toUpperCase()) // para deixar tudo maiuscúlo

console.log(nomeDeAlunos.includes("ac")) // Se o valor estiver na Variável ele retorna true e senão false

nomeDeAlunos.replaceAll('a', 'i')// Fazer uma substirução de strings pega o "a" e colocar o "i"
console.log(nomeDeAlunos.replaceAll('a', 'i'))

const conceitosLogica = "                     inteiro real cadeia de caracteres...        " 
console.log(conceitosLogica.trim()) // Serve para tiraa espaços disnecessários no inicio e final da string

let dataParaCortar = "05 de Abril"
const cpf = "9612365444"
// 05 de Abril
// Poições: 0123456789
console.log(dataParaCortar.slice(0, 2)) // Pega os caacteres de acordo com a posição do índice passada
console.log(cpf.slice(0, 3))

                                                                   
                                                                    
