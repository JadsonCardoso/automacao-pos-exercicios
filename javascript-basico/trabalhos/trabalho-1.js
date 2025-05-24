const entrada = [1, 'carro', 42, 'moto', 3.14, 100, '50'];
const resultado = filtrarNumeros(entrada);

console.log(resultado); 

function filtrarNumeros(lista) {
  return lista.filter(item => typeof item === 'number');
}
