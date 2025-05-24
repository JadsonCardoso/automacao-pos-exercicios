/**
 * Temos que separar as funções pela sua responsabilidades
 */

// Criando uma função
function minhaFuncao() {
    console.log("Testando!!")
}

// chamando a funcao
minhaFuncao()

// Colocando a funçaõ em uma variável

// Ao criar uma função como CONTANTE, ela não pode ser subscripta, muitas DEVS criam assim, para questão de CONSISTANCIA PARA NÃO SER SUBSCRITA, E QUE O CÓDIGO SERÁ EXECUTADO CORRETAMENTE
// Por isso, que podemos optar ou nõa por usar constante dentro da variável CONST
const minhaFuncaoEmVariavel = function () { // Como a variável já tem um NOME, então não presisamos dar nome a FUNÇÃO, ela é anônima.
    console.log("Função em variável")
}

//Chamo a função pelo o NOME DA VARIÁVEL
minhaFuncaoEmVariavel()

// Função com argumento/parametro
function funcaoComParametro(txt) { //Passando uma variável como parâmetro
    console.log(`Imprimindo: ${txt}`) // Exibindo CONSOLE com o valor que será passado para a variável do parâmetro
}

// Chamando função e passando valor da variável usada como parâmetro.
// Sendo assim, todo vez que que chamar a função, posso passar valor diferente para a variável PARAMETRO da função
funcaoComParametro("Valor da variável do parametro") // Valor que estou passando para a variável TXT
funcaoComParametro("OUTRO Valor da variável do parametro") // Valor que estou passando para a variável TXT

// Funções com Retorno: Usamos retorno para usamos os valores que serão tradados dentro da função, em outra parte do nosso projeto.
const a = 10
const b = 20
const c = 30 
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma (a, b) // Aqui ela vai resultar o resultado da soma de n1 + n2 a qual estar no RETURN
console.log(resultado)

// Escopo das funções
// A variável que tem o valor dentro da função não é alterada pelo o valor da variável que estar fora da função, mesma que elas tenham o mesmo nome.
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é ${y}`)
}


testandoEscopo() //A variável que tem o valor dentro da função não é alterada pelo o valor da variável que estar fora da função, mesma que elas tenham o mesmo nome.
console.log(`Y fora da função é: ${y}`)

// Escopo aninhado

let m = 10 // Variável do escopo global

function escopoAninhado() {
    let m = 20 // Variavel do escopo da função

    if(true) {
        let m = 30 // Variavel do escopo do PRIMERO IF

        if(true) {
            let m = 40 // Variavel do escopo do SEGUNDO IF

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()

console.log(m)

// ARROW FUNCTION - Função de seta
const testeArrow = () => {// Ela é uma função anônima, e precisa estar dentro de uma variável
    console.log("Esta é uma arrow function")
}

testeArrow()

// ARROW FUNCTION - Função de seta com ARGUMENTO/PARÂMETRO

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par")
        return // Ao pormos RETURN quando uma condição é satisfeita é chamado  de: onlyreturn
    }

    console.log("Impar")
}

parOuImpar(5)

parOuImpar(10)

// MAIS SOBRE ARROW FUNCTION

const raizQuadrada = (x) => {
    return x * x
}
console.log(raizQuadrada(4))

// Para funções de apenas uma linha, nós usamos dessa forma. Omitindo o escopo de bloco.
const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))

const helloWold = () => console.log("Hello World")
helloWold()

// Argumentos/parametros opcionais
const multiplication = function (m, n) {
    if(n === undefined) { // Com isso, eu consigo saber se o argumento foi ou não passado na função.
        return m * 2 
    } else {
        return m * n
    }
}
console.log(multiplication(5))

console.log(multiplication(2, 4))

const saudacao = (name) => {

    if(!name) { // Caso nome for false, ou seja, não tiver valor, então será exibido esse bloco.
        console.log('Olá!')
        return
    }

    console.log(`Olá ${name}!`) // Caso nome for true, ou seja, possuir valor, exiba o valor.
}

saudacao() // If será executado com Olá!

saudacao("Jadson") // Função será executado com este valor

// Argumentos/parametros com valor default. Caso nenhum valor seja passado como argumento, então será inserido o valor DEFAULT
const custoSaudacao = (name2, sauda = "Olá") => {// Na area de argumento, eu atribuo um valor para a variável que eu quero que tenha um valor por DEFAULT
    return `${sauda}, ${name2}!`
}
console.log(custoSaudacao("Jadson"))
console.log(custoSaudacao("Jadson Cardoso", "Boa noite")) //Passando um valor para a variável "sauda", esse substitui o valor por DEFAULT "Olá"

const repeteTexto = (texto, repete = 2) => {
    for (let i = 0; i < repete; i++){
        console.log(texto)
    }
}

repeteTexto("Testando com quantidade por DEFAULT")

repeteTexto("Testando OUTRA quantidade", 5)

// Closure: Conceito - Eu tenho valor dentro de um escopo e consigo reaproveitar por causa de uma outra função

function someFunction() {
    let txt = "Alguma coisa"

    function reaproveitando() { // Passnado variável para dentro de uma função dentro do escopo
        console.log(txt)
    }

    reaproveitando() // Chamo dentro do escopo, a função com o valor que será reaproitado
}

someFunction() // Agora, a função do ESCOPO tem o Valor reaproveitado.

// Mais sobre Closure:

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = multiplicationClosure(5) // Passando e salvando função para dentro de variável, lembrando que o argumento dentro dela é na variável "n"

const c2 = multiplicationClosure(10)

console.log(c1(5)) //C1 tem o valor 5 ara o argumento "n" que foi atribuido a acima, o (5) depois do C1, é o valor de "m"
console.log(c2(10))

//Recursão
const ateDez = (n, m) => {
    if (n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        ateDez(x, m)
    }
}

ateDez(100, 7)