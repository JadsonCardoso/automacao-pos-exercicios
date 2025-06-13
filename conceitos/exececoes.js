/**
 *  Lindando com exceção; Salvando ou exibindo o erro
 * 
 * 
 * lançar = throw
 */


// TRY Tentar fazer algo que pode dar erro
try { // Ele guarda o erro
    console.log(`Tentando alimentar o pet.....`)
    const nome = 'Teste'
    nome = 'teste 2' // Erro do type que não podemos alterar a CONST
 // throw new Error() //Forçando o erro
} catch (excecao) { // CATCH captura e trata o erro/excecoes
    console.log(excecao)
    console.log(excecao.name) // Nome do erro: Exibir que qual está acontacendo
    console.log(excecao.message) // Mensagem do erro que está acontacendo
} finally { // Executa se der erro ou não
    console.log('Sempre é executado')
   
}