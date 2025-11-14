// Funções é um bloco de código que chamamos para ser executado.

// Uma função precisa ser chamada
//Pode ou não receber parâmetros
//Pode ou não retornar dados

/*
function gerarNome(nome, sobrenome, idade) {
  

  console.log( 'Nome: ',  nome  ,  sobrenome )
  console.log('Idade: ', idade)
}
*/

function gerarNome(nome, sobrenome, idade) {
  

  return( 'Nome: ' +  nome  +  sobrenome )
  
}

//console.log(gerarNome('Claudio', 'Junior')) - 1 forma de chamar o return
// agora outra forma:

const nomeGerado = gerarNome('Pedro', ' Carvalho')
console.log(nomeGerado)


