const paises = ['Brasil', 'Argentina', 'Canada'] // lista de dados / arrays]

console.log('Acessando o país: ' + paises[2]) // Acessando uma posição do nosso array
console.log('Tamanho do array:', paises.length) // para saber o tamanho do array[Concatenando com + e ,]

// Operações(Manipulação de como adicionar e remover) com o array

paises.push('USA') // Adiciona no final do array
paises.pop() // Remover o último elemento
paises.unshift('França') // Adiciona no começo do array
paises.shift() // Remove o primeiro elemento

console.log(paises)