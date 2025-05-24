/**
 
enquanto (while) faça (do)
Usado quando nao sabe quantas repetições precisarão ser feitas **/

let voltasAteFicarCansado = 5
let quantidadeVoltasAtual = 0

while (quantidadeVoltasAtual < voltasAteFicarCansado) {
    console.log(`Dar uma volta na quadra`)
    quantidadeVoltasAtual++ // o incremento aumenta o valor da variavel quantidadedeVoltasAtual a cada repetição para que ela não seja infinita
}