// Estrutura de repetição é uma estrutura que se repete algumas vezes / LOOP

//Repetição por array

/*array.forEach(element => {
  });*/

  const cidades =['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']
  // cidades[0]
  //cidades[1]

  cidades.forEach((elemento, index) => {
    //console.log('Execução número: ' + index)
    //console.log(elemento)
  })

// /*for normal
/*for (let index = 0; in/*dex <10; index++) {
  const element = array[index];
   
} 
  */

for(let indice = 0; indice < cidades.length; indice++) {
  //console.log(cidades[0])
  console.log(cidades[indice])
}