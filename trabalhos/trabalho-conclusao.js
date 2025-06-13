// Tags de Identificação
function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}


// Verificar adoção
const idadeMinima = 1

function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima || porte === 'P'

    return adocao
}

// Calcular Consumo de Ração diária
function calcularConsumoDeRacao(nome, idade, peso) {
    const gramasPorDia = Math.round(peso * 300)
 
    return gramasPorDia
}

// Decidir Tipo de Atividade
function decidirTipoDeAtividadePorPorte(porte) {
    let atividade
    switch (porte) {
    case 'pequeno':
        atividade = `brincar dentro de casa`
        break
    case 'médio':
        atividade = `caminhada no quarteirão`
        break 
    case 'grande':
        atividade = `correr no parque`
        break 
    default:
        atividade = `porte inválido`
    }

    return atividade
}

// Busca assíncrona
async function buscarDadoAsync () {
        const nome = 'pipoca'
        return nome.charAt(0).toUpperCase() + nome.slice(1, nome.length).toLowerCase()
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}
