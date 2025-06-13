const quantidade = 100
function somaNumero() {
    let soma = 0
    for (let cont = 1; cont <= quantidade; cont++) {
        soma = soma + cont
        console.log(soma)
    }
}

somaNumero()

// Escopo da função

// Variáveis definido no escopo global

let num1 = 20, num2 = 3, nome = "Chamanhk"

// Funcao definida no escopo global
function multiplica() {
    return num1 * num2
}

console.log(multiplica()) // Retorna 60

// Funcao aninhada

function getScore() {
    let num1 = 2, num2 = 3

    function add() { // Esta função pode acessar as variaeis criada dentro a função dentro dela.
        return nome + ' Scored ' + (num1 + num2) // VARIÁVEL NOME Do escopo GLOBAL, mas O NUM1 + NUM2 do escopo da função
    }

    return add()
}

console.log(getScore()) // Retorna a soma das VARIAVEIS dentro da FUNÇÃO getScore

// Função aninhada com CLOSURE
function addexterna(a, b) {
    function interna(x){
        return x * x
    }

    return interna(a) + interna(b)

}

console.log(addexterna(2,3)) // A função interna vai multiplicar: 2 x 2 = 4, 3 x 3 = 9 e depois, a função externa vai soma
                            // 4 + 9 = 13: Ou seja, primeiro ela executa e retorna o resultado da função interna, depois
                            // A função externa usa o resultado da função interna realizaer logica da função externa.


// Função aninhada com CLOSURE - Passando valores para a função externa e interna
 function fora(x) {
    function dentro(y){
        return x + y // Soma do argumento da variável externa com o argumento da variável interna
    }
    return dentro
 }

 console.log(fora(3)(5)) // Passando valores para o argumento (x) da função externa e para o argumento (y) função interna.
 console.log(fora(12)(8))

 // Multiplas funções aninhadas

 function a(x) {
    function b(y) {
        function c(z) {
            console.log(x + y + z)
        }
        c(3)
    }
    b(2)
 }
a(1) //

// Funções de seta

let g = ['Teste 1', 'Teste 2', 'Teste 3', 'Teste 4']

let a1 = g.map((s) => s.length) // Função curta

console.log(a1)