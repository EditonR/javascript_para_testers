// Exercicio 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
//Eduardo, Maria, Fernando, João e Francisco
//Numero da exercução, começando em 1
//Nome que está sendo executado
//Separadores

//Mostrar assim no console.log:
//Execução número: 1
//Execução: Eduardo
// -----------------

const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']
nomes.shift()

//console.log('Execução número: ' + index)

nomes.forEach((nomes, index) => {
  console.log('Execução número: ',  index +1)
  console.log(nomes)
  console.log('------------------')
})

// Resolução do meu exercício de acordo com a solicitação // Vou ver a aula e caso não seguir as ordens eu subo a correção.


