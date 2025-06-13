/*  
    - para, faca
    - contador; condicao; manipulacao do contador (incremento/decremento)
*/

const quantidadeCalculada = 3
const gatos = ['Lessei', 'Pony', 'Fumaca']

for(let quantidadeDepPestiscos = 1; quantidadeDepPestiscos <= quantidadeCalculada; quantidadeDepPestiscos++) {
    // acao de dar petisco
    console.log(`Dando o pestisco de n ${quantidadeDepPestiscos}`)
}

for(let indice = 0; indice < gatos.length; indice++) {

    console.log(`Dando o pestisco para o Gato ${gatos[indice]}`)
}