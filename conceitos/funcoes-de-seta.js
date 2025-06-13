// funcoes de sete / flecha


// funcao nemeada, com parametro, sem terono

const exibirNomeDoDog = (nome) => {
    console.log(nome)
}

// funcao nomeada, com paramentro, com retorno: Returno retornar a saída/resultado da execução da função

const obeterNomeDoDogFormatado = (nome) => {
    return nome.toLocaleUpperCase()
}

// funcao noemada, com parametro, sem etorno e como valor por padrão.

const obeterPorteDoDog = (porte = 'Valor padrão') => {
    console.log(porte)
}

const objetorDog = () => {
    return {   
        nome: 'Baily Maria',
        peso: 11.5,
        dogIrmao: {
            nome: 'Billy 2',
            peso: 13.5
        }
    }
}

// arrow functions sem bloco + com return 'automático'
const dobrar = (numero) => numero * 2

const listarDeNomesDogs = () => {
    return [
        'Nome 1',
        'Nome 2'
    ]
}

// chamando as funções
exibirNomeDoDog("Pipoca") 
obeterPorteDoDog()
console.log(obeterNomeDoDogFormatado("Baily Maria"))
console.log(objetorDog())
console.log(listarDeNomesDogs())