/*
    Condição (se verdadeira)
        acao dentro if
    senao se (outra condicacao)
        acao dentro do if
    senao 
        acao dentro do else

*/ 

if(10 > 5) {
    console.log("Valor é maior")
} else {
    console.log("valor é menor")    
}

const idade =3
const porte = 'P'

if (idade >= 2) {
    console.log('Pode ser adotado, pela idade')
} else if (porte === 'P') {
    console.log('Pode ser adotado pelo porte')
} else {
    console.log('Não pode ser adotado')
}