/*
+ adição
- substração 
* multiplicação
/ divisão
% resto
** exponencial
*/

console.log(1 + 2)
console.log(4 - 2)
console.log(5 * 2)

console.log(10 / 2)
console.log(11 % 2)

console.log(5 ** 5)

// LEMBRE-SE DA PRECEDÊNCIA - ordem de execução / prioridade
console.log(1 + 3 * 2)// Primeiro será executado a multiplicação

// FORÇANDO A PRECEDÊNCIA
console.log((1 + 3) * 2) // DENTRO DO PARENTESES E DEPOIS QUE ESTÁ FORA

console.log(11 / 2) // 5.5
console.log(parseInt(11 / 2)) // 5.5 -> 5

// arredondamento

// arredonda para baixo
console.log(Math.floor(5.8))

// arredonda para cima
console.log(Math.ceil(5.8))

// arredonda para o mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.4))
console.log(Math.round(5.5))

// 
const valorDecimal = 2.123123
console.log(valorDecimal.toFixed(3))