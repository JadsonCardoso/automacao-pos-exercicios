// Validador de idade mínima para adoção: Feito por MIM

let nomeDog1 = 'Arisona'
let idade1 = 1

let idadeComparada = idade1 >= 2 ? 'Sim' : 'Não'
console.log(`Nome do dog ${ nomeDog1 } idade ${ idade1 } está apto para adoção? ${ idadeComparada  }`) 


// Feito em sala: 
const idadeMinima1 = 2
    const nomeDog = "Toby"
    const idadeDog = 1
    const pequenoPorte = false
    const podeAdotar = idadeDog >= idadeMinima1 || pequenoPorte;
    console.log("=== VALIDAÇÃO PARA ADOÇÃO ===");
    console.log("Nome do dog: " + nomeDog);
    console.log("Idade: " + idadeDog + " anos");
    console.log("Apto para adoção? " + (podeAdotar ? "Sim" : "Não"));
    console.log("==============================");


// EXEMPLO COM FUNÇÃO

const nome = 'Ada'
const idade = 0
const porte = 'P'

const idadeMinima = 2

const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(adocao)
console.log(adocaov2)

function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

  // return adocao
  console.log(adocao)
}

// idade 1 + porte M = nao
// idade 2 + porte M = sim, pela idade
// idade 2 + porte P = sim, pela idade
// idade 1 + porte P = sim, pelo porte

verificarSePodeSerAdotado(1, 'M')
verificarSePodeSerAdotado(2, 'M')
verificarSePodeSerAdotado(2, 'P')
verificarSePodeSerAdotado(1, 'P')