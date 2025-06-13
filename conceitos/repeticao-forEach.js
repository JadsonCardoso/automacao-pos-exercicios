/*
    paraCada (item da lista)
   // Ele pecorre e executa uma ação em cada item da lista 

*/

const listaDeAlunos = [
    'Matheus',
    'Renata',
    'Leandro',
    'Ana',
    'Lucas'
]

listaDeAlunos.forEach(aluno => {
    console.log(aluno)
})


const listaDeAlunosNotas = [
    {
        nome: 'Matheus',
        nota: 5
    },
    {
        nome: 'Renata',
        nota: 9.7
    },
    {
        nome: 'Lucas',
        nota: 7.2
    },
    {
        nome: 'Ana',
        nota: 6.9
    },
    {
        nome: 'Leandro',
        nota: 9
    },
]

console.log('-----------------------------------------')

listaDeAlunosNotas.forEach((aluno, index) => {

    console.log(index) // Index mostre a posição do Objeto ou item

    if (aluno.nota < 7) {
        console.log( `O aluno ${aluno.nome} precisa de ponto extra`)
    }
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})