/* 
operadores = comparação, lógica , aritmética

VALOR A maior que VALOR B
VALOR A menor que VALOR B

COMPARACAO COM APENAS DOIS "==" -> VARIAVEAL A 'possui o mesmo valor que' VARIAVEL B
COMPARACAO COM APENAS TRÊS "===" -> VARIAVEAL A 'possui o mesmo valor e o mesmo tipo que' VARIAVEL B

>  - maior que
>= - maior ou igual que
<  - menor
<= - menor ou igual
!= - diferença de valores
=== - igualdede valores e tipo de dados
*/

// console.log(`10 > 5 = ${ 10 > 5}`) // verdadeiro = true. Os valores dentro "${}" são executados.

// maior que
console.log(10 > 5) // true
console.log(10 > 17) // false


// maior ou igual que
console.log(10 >= 5) // true
console.log(10 >= 17) // false

// menor que

console.log(10 < 5) // false
console.log(10 < 17) // true

// menor ou igual que
console.log(10 <= 5) // false
console.log(10 <= 17) // true

// igualdade de valores
console.log(1 == '1') // true
console.log(1 == '2') // false
console.log(true == 1) // true
console.log(false == 1) // false
console.log(null == undefined) // true
console.log('' == 0) // true

// igualdede valores e tipo de dados: SEMPRE USE O "===" Para comparação dos valores.
console.log(1 === '1') // false
console.log(true === 1) // false
console.log(false === 1) // false
console.log(null === undefined) // false
console.log('' === 0) // false

// diferença de valores
console.log(1 != 2) // true
console.log(1 != 1) // false

// diferença de valores e tipagem
console.log(1 !== '1') // true
console.log(1 !== 1) // false