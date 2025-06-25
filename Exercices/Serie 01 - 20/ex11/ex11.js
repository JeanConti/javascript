/* Exercice 11: Générateur de pseudo */
console.log('Exercice 11: Générateur de pseudo')

/* function generatePseudo() {

  
  const names = ['Alice', 'Bob', 'Charly', 'Diana', 'Eve']
  const ages = [20, 30, 19, 25, 18]
  const numbers = [1, 2, 3, 4, 5]
  
  const randomName = names[Math.floor(Math.random() * names.length)]
  const randomAge = ages[Math.floor(Math.random()) * ages.length]
  const randomNumber = numbers[Math.floor(Math.random()) * numbers.length]

  return `${randomName}-${randomAge}${randomNumber}`
}

console.log(generatePseudo())
 */

function genererPseudo(prenom, age) {
  console.log(prenom + '-' + age + Math.floor(Math.random() * 101))
}

genererPseudo('jean', 34)

console.log('--------------') 