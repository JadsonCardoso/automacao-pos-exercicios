// Modulos, agrupador de funções

/*
    Sintaxe CommonJS(commonjs):
        module.exports = {} / require('')
    
    ESM (module)- Ecmascript Standard Modules
        export {} / import

    Ao importar o arquivo, podemos uacesso e usar as funções que exitem dentro dele.

    Temo que implemtar o tipo do modulo no arquivo "PACKAGE.JSON". Ele fica no "TYPE"
*/

let brinquedo = [
    'Peteca',
    'Bola',
    'Osso'
]
const nome = 'Fred'
function exibirNomePet(nome) {
    console.log(`O nome do pet é ${nome}`)
}

exibirNomePet(`Arisona`)
exibirNomePet(`Outra nome`)

// export {} / import
export { // Arquivo que vamos exportar, fica dentro do bloco. Podemos exporta: funções, variáveis, objetos etc.
    exibirNomePet, // AO separar por vígula, podemos por mais funções para serem exportadas
    brinquedo
}