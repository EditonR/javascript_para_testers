// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
//Contendo: ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
//Para cada item, verificar se a cidade Florianópolis está presente na lista
//Printar nome da cidade
//Caso esteja, avisar
//Caso não seja o elemento procurado, avisar também
//Número da execucação

//Execução: 1
//Cidade: 
//Encontrado!/Não Encontrado!
//-----------------------------

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

//console.log('Execução:', cidades)

cidades.forEach((cidade, index) => {
  console.log('Execução: ',  index +1)
  console.log('Cidade:', cidade)

  if (cidade == 'Florianópolis') {
    console.log('Encontrado!')
  } else {
    console.log('Não encontrado!')
  }
  console.log('------------------')
})


