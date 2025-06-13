// Array de objetos
const biblioteca = [ 
    {
    titulo: 'Quem pensa enriquece',
    autor: 'Napoleon Hill',
    paginas: 234

   },
   {
    titulo: 'O homem mais rico da babilônia',
    autor: 'Desconhecido',
    paginas: 160

   }
]
   console.log(biblioteca)

// Adicionando informações manualmente nas propriedades do OBJETO BIBLIOTECA usando o método PUSH
biblioteca.push({
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
  });
   console.log(biblioteca)

// Mostrando a quantidade de livros
   console.log(biblioteca.length)

// Mostrando o Título do primeiro livro
   console.log(biblioteca[1].titulo) // Estou pegando o primeiro OBJETO e acessando apropriedade TITULO

// Mostrando o primeiro livro, todas as propriedades
   console.log(biblioteca[0]) // Estou pegando o primeiro OBJETO

// Mostrando uma lista com os títulos de todos os livros
biblioteca.forEach(livro => { // Pecorrendo os elementos do OBJETO 
    console.log(livro.titulo) // Acessando o título de cada elemento
})

// Lista de tarefas
// 1. Crie um array chamado 'tarefas'
// 2. Cada tarefa é um objeto com:
//    - descricao (string)
//    - concluida (boolean)

// 3. Crie uma função chamada 'marcarComoConcluida(descricao)' que procura
//    a tarefa pela descrição e muda 'concluida' para true

// 4. Crie outra função chamada 'listarPendentes()' que mostra apenas tarefas com concluida = false


const tarefas = [
{
    nome: 'Estudar',
    descricao: 'Estudar todos os dias',
    concluida: false
},
{
    nome: 'Treinar',
    descricao: 'Treinar: Seg, Qua, Sex',
    concluida: false
}]

function marcarComoConcluida() {
    tarefas.forEach(atividade => {
      if (!atividade.concluida) {
        atividade.concluida = true;
        console.log(`✅ Concluída: ${atividade.descricao}`);
      } else {
        console.log(`🔁 Já estava concluída: ${atividade.descricao}`);
      }
    });
  
    console.log("\n📋 Lista atualizada de tarefas:");
    console.log(tarefas);
  }

 marcarComoConcluida()

// 1. Crie um objeto chamado 'carrinho'
// 2. Ele deve ter:
//    - uma propriedade 'itens' (array vazio)
//    - um método 'adicionarItem(item)' que adiciona um item ao array
//    - um método 'totalItens()' que retorna quantos itens há no carrinho

// 3. Teste adicionando 3 itens (strings) e mostre o total no console

const carrinho = {
    itens: ['Tenis', 'Short']
}

console.log(carrinho)


// Usando o método ".PUSH" Para adicionar itens no objeto de array
function adicionarItemCarrinho(item) {
    // carrinho.itens.push = item // Dessa forma, subscreve o item todo vez que chamarmos a função
    carrinho.itens.push(item) // Dessa forma, adicionamos um itens no objeto de array toda vez que chamarmos a função
    return carrinho // Retornando o objeto com o item adicionado
}

 console.log(adicionarItemCarrinho("camisa"))
 console.log(adicionarItemCarrinho("calça"))

 // Cadastro de pessoas

 const pessoas = [{
    nome: 'Jadson',
    idade: 17,
    profissao: 'Matemático'
 }]

 pessoas.push({ // Adicionando pessoa no FINAL do OBJETO PESSOA com o PUSH
  nome: 'Tiago', 
  idade: 21,
  profissao: 'Ciêntista'
})


 console.log(pessoas)
 
  function adicionarPessoa(nome, idade, profissao) { // Função para adicionar pessoas no FINAL do OBJETO  com o PUSH
    pessoas.push({
      nome: nome, 
      idade: idade,
      profissao: profissao
    })

    return pessoas
}

 console.log(adicionarPessoa('João', 33, 'Professor')) // Será exibida todos os dados do objeto, retornando valor que estou adicionando ao chamar a FUNCTION

 adicionarPessoa('Maria', 39, 'Programadora')
 console.log(pessoas) // Caso eu não cahame a função dentro do CONSOLE.LOG será necessário eu chamar o objeto para ele ser apresentado como o novo valor que está sendo adicionado
 console.log(pessoas.length)

 pessoas.unshift({ // Adicionando pessoa no INICIO do OBJETO PESSOA com o unshift
    nome: 'Pedro',
    idade: 22,
    profissao: 'Músico'
 })

 console.log(pessoas)

function adicionarPessoaInicio(nome, idade, profissao) { // FUNÇÃO - Adicionando pessoa no INICIO do OBJETO PESSOA com o unshift
    pessoas.unshift({
      nome: nome,
      idade: idade,
      profissao: profissao
    })

    return pessoas
}

 console.log(adicionarPessoaInicio('Paulo', 15, 'Estudante'))

 function removerPessoaFinal() {
    const pessoaRemovida = pessoas.pop() // Removendo ultima pessoa
    return pessoaRemovida // Retorna a pessoa removida
 }
 
const guardarPessoaRemovida = console.log(removerPessoaFinal()) // Guarda e exibi pessoa que foi removida 

console.log(pessoas) // validar se a ultima pessoas foi removida

function removerPessoaInico() {
  const pessoaRemovida = pessoas.shift() // Removendo primeira pessoa
  return pessoaRemovida // Retorna a pessoa removida
}

const guardarPessoaRemovidaInicio = console.log(removerPessoaInico()) // Guarda e exibi pessoa que foi removida 

console.log(pessoas) // validar se a ultima pessoas foi removida

// Cadastro de produtos

const produtos = [
  { // Objeto vazio
    
  }]

  function adicionarUltimoProdutos(nome, preco, categoria) {
    produtos.push({
      nome: nome,
      preco: preco,
      categoria: categoria
    })

    return produtos
  }

  console.log(adicionarUltimoProdutos('Feijão', 11.15, 'alimentos'))
  console.log(adicionarUltimoProdutos('Microfone', 15, 'Instrumento'))
  console.log(adicionarUltimoProdutos('Camisa', 30, 'Vestuario'))
  console.log(Object.keys(produtos)) // Verifiando as propriedades do objeto
  console.log(Object.entries(produtos)) // Exibi as propriedades e os valores dentro OBJETO, em forma de array

  console.log(produtos.preco instanceof Object) //Verificando se o item PRECO do OBJETO PRODUTO é um OBJETO
  console.log(typeof produtos.preco) // Verificando o tipo da PROPRIEDADE preco do OBJETO PRODUTO

  function removerUltimoProduto() {
    produtos.pop()
    return produtos
  }

  console.log(removerUltimoProduto())

  function adicionarInicioProduto(nome, preco, categoria) {
    produtos.unshift({
      nome: nome,
      preco: preco,
      categoria: categoria
    })

    return produtos
  }

  console.log(adicionarInicioProduto('Tenis', 200, 'Vestuario'))
  console.log(Object.entries(produtos))
  console.log(produtos.length)


  // Exercício 2 (Novo): Gerenciador de Tarefas
  // Crie um sistema simples para gerenciar tarefas do dia.
  
  // Requisitos:
  // Crie um objeto literal chamado agenda com uma chave tarefas que seja um array vazio.
  
  // Crie uma função adicionarTarefa(titulo, prioridade) que:
  
  // Crie um objeto com titulo e prioridade (ex: "Alta", "Média", "Baixa").
  
  // Use push() para adicioná-lo ao array agenda.tarefas.
  
  // Crie uma função priorizarTarefa(titulo, prioridade) que:
  
  // Crie um objeto com titulo e prioridade.
  
  // Use unshift() para adicioná-lo ao início da lista (tarefas urgentes).
  
  // Crie uma função removerUltimaTarefa() que use pop() para remover a última tarefa da lista.
  
  // Crie uma função removerPrimeiraTarefa() que use shift() para remover a primeira tarefa da lista.
  
  // Crie uma função mostrarTarefas() que:
  
  // Use Object.entries() para exibir cada tarefa com seu índice.
  
  // Verifique se cada item em agenda.tarefas é um objeto usando instanceof Object.
  
  // Use Object.keys() para listar as chaves de cada tarefa.
  
  // function adicionarTarefa(titulo, prioridade) {
  //   agenda.tarefas.push({
  //     titulo: titulo,
  //     prioridade: prioridade
  //   })
 
  //   return agenda
  // }
  
  // function adicionarTarefa(titulo, prioridade) {
  //   agenda.push({
  //     tarefas: titulo = titulo,
  //     tarefas: prioridade = prioridade
  //   })

  //   return agenda
  // }

  // function priorizarTarefa(titulo, prioridade) {
  //   agenda.tarefas.unshift({
  //     titulo: titulo,
  //     prioridade: prioridade
  //   })

  //   return console.log(agenda.tarefas[0])
  // }
  // console.log(adicionarTarefa('Funcional', 'baixa'))
  // console.log(adicionarTarefa('Leitura', 'Alta'))
  // priorizarTarefa('Trabalhar', 'Alta')

    
  const agenda = {
    tarefas: []
  }

  // A função adiciona as tarefas conforne a sua prioridade
function adicionarTarefa(titulo, prioridade) {
  let novaTarefa = {
    titulo: titulo,
    prioridade: prioridade
  }

 // Adicionar a tarefa de acordo com a prioridade
  if (prioridade === 'alta') {
    agenda.tarefas.unshift(novaTarefa); // Tarefa de alta prioridade vai no início
  } else if (prioridade === 'media') {
    // Encontrar o local adequado para a prioridade média (dentro da lista de alta prioridade)
    let index = agenda.tarefas.findIndex(tarefa => tarefa.prioridade === 'baixa');
    if (index === -1) {
      // Se não houver nenhuma tarefa de baixa prioridade, adicionar no final
      agenda.tarefas.push(novaTarefa);
    } else {
      // Caso contrário, insere antes da tarefa de baixa prioridade
      agenda.tarefas.splice(index, 0, novaTarefa);
    }
  } else if (prioridade === 'baixa') {
    agenda.tarefas.push(novaTarefa); // Tarefa de baixa prioridade vai no final
  }

  return console.log(agenda.tarefas);
}

  adicionarTarefa('Funcional', 'baixa')
  adicionarTarefa('Trabalho', 'alta')
  adicionarTarefa('Trabalho', 'media')

  console.log(Object.entries(agenda.tarefas)) // Exibi as propriedades e os valores dentro dela, em forma de array e a quantidade de elementos

  let prat = ['1', 1, 'true', 'Eu']

  prat.push('ADD')

  console.log(prat)