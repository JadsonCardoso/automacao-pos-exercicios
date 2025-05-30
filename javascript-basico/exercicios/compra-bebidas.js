// A função com trativas dentro dela, retorna o resultado da função.
// No caso abaixo, é o resultado do valor IDADE dado a conção que o valor entrar
// Ou seja, esta função retorna o resultado na condição
// Com retorno
function ValidarCompraDeBebidas(idade) {
    let resultado
    if (idade >= 18) {
        resultado = 'Pode comprar Bebidas'
    }  else {
           resultado = 'Não pode comprar'
       }

    return console.log(resultado)
}

ValidarCompraDeBebidas(12)

// Sem retorno: O mesmo resultado acima. 
function ValidarCompraDeBebidas2(idade) {
    if (idade >= 18) {
        console.log('Pode comprar Bebidas')
    }  else {
            console.log('Não pode comprar')
       }
}

ValidarCompraDeBebidas2(18)

// Esta função retorna apenas o valor do argumento dada a ELA
function nome (nome) {
    return console.log(nome)
}
 nome("Teste 1")
 nome("Teste 2")
 nome("Teste 3")


 // Declarando uma Função anômima. Para Isso, colocamos a FUNCTION dentro de uma VARIÁVEL
let nomeUser = function (nomeUsuario) {
    return console.log(nomeUsuario)
}

nomeUser("Jadson")
nomeUser("Jadson 123")
nomeUser("André")
nomeUser("Vasconcelos")

 // Usando função anômimo em uma variável

 let soma = function(numero) {
    return console.log(numero + numero)
 }

 let resultado = soma(5) // Passando/CHAMANDO  a função SOMA com VALOR DO ARGUMENTO para a VARIÁVEL resultado


 console.log(square(5));
 /* ... */
 function square(n){return n*n}