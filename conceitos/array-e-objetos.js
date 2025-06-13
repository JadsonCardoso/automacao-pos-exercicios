// Arrays - Listas de qualquer tipo de dado: Para o JS um array é considerado como objeto.
const lista  = [1,2,3,4,5]

console.log(lista)

console.log(typeof lista)// Tipo do dado

const itens = ['Jadson', true, 2, 1.23, ['t', 'aa']] // Array com diversos tipos de dados

console.log(itens)

// Acessando os elementos do ARRAY
const lis = ['a', 'b', 'c', 'd']

console.log(lis[2]) // Chamamos o nome do ARRAY dentro do CONSOLE.LOG e pasamos dentro de [] o indice(posição) do elemento no array

// Propriedades = São como informações de um objeto.
// As proprieddes pode ser acessadas por notação de ponto ou colchetes.
const numeros = [4,3,3]

// Acessando por '.' ponto
console.log(numeros.length) // LENGTH é uma PROPRIEDADE QUE Conta a quantidade de elementos na lista
// Acessando com '[]' COLCHETES
console.log(numeros['length'])

let nome = 'Jadson'

console.log(nome.length) // Conta a quantidade de que a STRING tem

// Métodos = Os métodos são como funções dentro de um objeto.
// Acessamos o método com notação de ponto e usamos () para invocar.
// Objetos são compostos por métodos e propriedades.

const ordermNumeros = [1,2,3]
// Ao invocar um objeto e no final colocarmos o '.' ponto. Serão exibidos os métodos, os quais estão Com ícone ROXO: Exemplo = ordemNumeros.
const outroNumeros = numeros.concat(ordermNumeros)  // o método CONCAT concatena os arrays. Nesse exemplo, criamos o array outroNumeros com os arrays "numeros" com "ordemNumeros" Ou seja, juntos.

console.log(outroNumeros)

const text = 'algum texto'
console.log(text.toLocaleUpperCase()) //Método para letras maiusculas

console.log(text.indexOf('e'))// Método para encontrar a posição de um caracter em uma STRING

// OBJETOS = Em JS temos um tipo de dados que é o objetos, mas seu nome técnico é OBJECT literals
// Isso porque o OBJETO tem da Orientação a Objetos com outros recursos: instancia, herança...
// O LITERALS possui apenas propriedades e métodos nos mesmo os criamos, ele fica em um bloco {}
// As propriedades são como variáveis e a atribuição de valor a propriedade é como ':' exemplo: nome: 'Teste' ou seja, nome recebe 'teste'
const pessoa = {
    nome: 'Jadson', // LEMRBANDO QUE AS VARIÁVEIS AQUI SÃO COMO PROPRIEDADES
    idade: 28,
    profissão: 'QA'
}

console.log(pessoa) // Chamando o objetos
console.log(pessoa.idade) // Acessando com '.' ponto o item do OBJETO
console.log(pessoa.nome.length) // Usando PROPRIEDADE no objetos
console.log(pessoa['idade']) // Acessando com [] o item do OBJETO 
console.log(typeof pessoa)

// Removendo e criando PROPRIEDADES
const car = {
    motor: 2.0,
    marca: 'VW',
    model: 'Tiguan',
    km: 2000
}
console.log(car)

// Para adicionarmos uma propriedada a um objeto, utilizamos a notação de ponto e atribúimos a um valor
car.portas = 4 // Adicionando a propriedade PORTAS
console.log(car)

// Para excluir uma propriedade, usamos o operador DELETE na propriedade alvo
delete car.marca // Deletando a propriedade MARCA
console.log(car)

// Diferença entre arrays e objetos: 
// Arrays são lista de itens: string, numeros e objetos
// é melhor usada com um tipo dado único.
// Usamos também array de objetos, é muito usado

// Objetos são usados para descrever cada um dos itens
// Contém as informações do mesmoa e propriedades possuem diferente tipos de dados.

// Mais sobre OBJETOS
// Podemos copiar todas as propriedades de um objetos para outro com o método ASSIGN
// Objecte literal é um as instância de um objeto, chamado Object
// Objeto ou array criado com CONST pode ter seus elementos e propriedades modificados.

const obg = {
    a: "tESTE",
    B: true
}

console.log(obg instanceof Object) // INSTANCEOF Verifica se o OBJETO é filho de uma classe.
                                  // Object é uma classe, pai de todos os objetos

// Copiando as propriedades
const obg2 = {
    c: []
}

Object.assign(obg2, obg) // Copiando as propriedadade do OBG para OBG2
console.log(obg2)

// Conhecendo melhor o OBJETO
// Podemos verificar as propriedades de um objeto com o método KEYS de OBJECT
// O método ENTRIES, recebe o arrays dos nomes das propriedades com seus valores.

console.log(Object.keys(obg)) // Verificando as propriedades do o método KEYS
console.log(Object.keys(obg2))

console.log(Object.entries(car)) // O ENTRIES exibida as propriedades e os valores em forma de ARRAY

// Mutação: Ocorre quando criamos objetos apartir de outro
// Esse objeto não é um novo, e sim, uma referência do primeiro
// Mudanças nele, podem afetar a cópia e vice-versa.
// Programadores iniciantes comentes esse erro, isso é um tiro no pé, pois, fazer isso não criamos objeto novo e sim uma referancia do OBJETO
const a = {
    name: 'Jadson'
}

const b = a // A CONST B está recebendo o OBJETO A como referencia. O OBJETO B não é um novo OBJETO e sim uma referencia do OBJETO A

console.log(a)
console.log(b)

a.idade = 28 // Adicionando uma nova propriedade no OBJETO A o qual vai refletir no OBJETO B, ou seja, os dois objetos terão o mesmo valor adicionado

console.log(a)
console.log(b)

delete b.idade // Alterações no OBJETO B também refletirão no OBJETO A

console.log(a)
console.log(b)

// Loops em Arrays: Pecorre os arrays atráves de estruturas de repetição

const usuarios = ['João', 'Maria', 'Pedro', 'Paulo']

for (let contador = 0; contador < usuarios.length; contador++) {
    console.log(`Listando o usuário ${usuarios[contador]}`) // Buscando os usuário pelo o índice do array,
}

// Métodos de array: push e pop
// Eles são úteis para manipular os arrays, alterar seus valores de alguma forma.
// O push adicionamos um item ao fim do array
// O pop temos a remoção de um alemento no fim do array

const array = ['a', 'b', 'c', 'd']

array.push('e') // Adicionando elemento no fim do array
array.push('1', '2', 'sas', 'ddd') // Podemos adicionar vários itens de uma só vez com o PUSH

console.log(array)
console.log(array.length)

array.pop() // Removendo o ultimo elemento

console.log(array)

// Podemos usar o método POP para retornar o elemento que foi removido

const itemRemovido = array.pop() // Removendo o ULTIMO item do ARRAY e guardando na variável itemRemovido

console.log(itemRemovido) // Será exibido o item que foi removido
console.log(array)

// Métodos de array: shift e unshift
// O SHIFT remove o primeiro elemento do array
// O UNSHIFT adiciona intes ao inicio do array

const letras = ['A', 'B', 'c']

const letra = letras.shift() // Removendo o PRIMEIRO item do ARRAY e guardando na variável letra

console.log(letra)
console.log(letras)

letras.unshift('D', 'e', 'F') // Adicionando vários itens no INICIO do array
letras.unshift('1') // Adicionando apenas um item

console.log(letras)

// Métodos de array: indexOf e lastIdexOf
// INDEXOF nos permite encontrar o índice de um elemento, que passamos como argumento para o método. Ele busca da esquerda para direta, ou seja, do ínicio ao fim
// LASTINDEXOF é usado quando há repetições de elementos e precisamos do índice da última ocorrência, ou seja, de trás para frente
// OBS: Caso passe um valor que não existe no array, muitos métodos vai retornar -1

const meusElementos = ['Morango', 'Maçã', 'Abacate', 'Pêra', 'Abacate']

console.log(meusElementos.indexOf("Maçã")) // o INDEXOF vai exibir o índice do item MAÇÃ dentro do array
console.log(meusElementos[2]) // Exibi o elemento do índice passado dentro do []
console.log(meusElementos[meusElementos.indexOf("Abacate")]) // Exibi o valor passado

console.log(meusElementos.lastIndexOf("Abacate")) // Ele vai acessar o último elemento dentro do array com este valor



