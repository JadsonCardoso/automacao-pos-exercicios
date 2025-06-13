/**
 * describe -> agrupador de testes
 * it  -> implementação do teste
 * 
 * ASSERTION/ASSERCO
 *  Vereificar se um comportamento está de acordo com o esperado
 */

import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert' // importanto biblioteca assert

describe('testes do Projeto', () => {
    it('deve exibir o dog com letras maiúsculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
        // vERIFICAR SE: VALOR ATUAL É IGUAL AO <VALOR ESPERADO>
    })

    it('primeiro testes', () => {

    })

    it('Segundo testes', () => {
        throw new Error()
    })
})