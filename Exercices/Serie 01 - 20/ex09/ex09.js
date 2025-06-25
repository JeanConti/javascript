console.log('Exercice 09: Table de multiplication')

/* Manera 1 => Avec boucle for */
const num = parseInt(prompt('Entrez un nombre: '))

for (let num2 = 1; num2 <= 10; num2++) {

  const resultat = num * num2
  console.log(`${num} * ${num2} = ${resultat}`)
}


/* Manera 2 => Avanzado: Prendre un nombre d'entrée 
et affiche sa table de multiplication */

/* function afficherTableMultiplication(num) {

  for (let num = 1; num < 11; num++) {

    const resultat = num * num2
    console.log(`${num} * ${num2} = ${resultat}`)
    
  }
} 


const num2 = parseInt(prompt('Entrez un nombre: '))
afficherTableMultiplication() */

console.log('--------------') 