/* 
    esses operadores são mais usado nas estrutura de repetição
    -- decremento
    ++ incremento

    Esse é mais usado em estrutura condicionais
    ? ternário

*/

// ++ incremento
let pesoDoDog = 10
pesoDoDog++ // será incrementado mais 1

console.log(pesoDoDog)

//  -- decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console(pesoDoTutor)

// ternário - Usamos para condições curtas.
// const porte = pesoDoDog <= 10 ? 'pequeno' : 'médio'
//            <condicao>         se         senao
// {<condicacao> ? <acao se verdadeiro>: <acao se falso>}

const pesoDoDogOperadorTernario = 21
const porte = pesoDoDogOperadorTernario <= 10 // se if
              ? 'pequeno'
              : pesoDoDogOperadorTernario <= 20 // senao se / else if
              ? 'médio'
              : 'grande' // senao

              // pesoDoDogOperadorTernario <= 10 ? 'pequeno' : pesoDoDogOperadorTernario <= 20 ? 'médio' : 'grande'

              // console.log(porte)

{/* <condicao> ? <acao se verdadeiro> : <acao se falso> */}

console.log(porte)