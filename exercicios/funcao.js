import { DOGS } from "./dados.js"
function entregarPetiscos(listaDeDogs){
    listaDeDogs.forEach(dog => {
        console.log(`Entregando petisco para ${dog}`)
    })
}

entregarPetiscos(DOGS)