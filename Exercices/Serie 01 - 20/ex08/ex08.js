/* Exercice 08: Boucle + conditions */
console.log('Exercice 08: Boucle + conditions')

/* 
let numeros = Array.from({length: 30}, (_, i) => + 1)

for (let numeros = 1 ; numeros < 30;  numeros++) {
  
  if (numeros / 3 === 0) {
  console.log('Fizz')
  } 

  if (numeros / 5 === 0) {
  
  console.log('Buzz')
  }
  
  if (numeros / 3 === 0 && numeros / 5 === 0) {
  
  console.log('Fizbuzz')
  }
  
} */

/* Avec la maniere de Quentin  */

/* let checkEntier_3 = Number.isInteger(numeros % 3)

let checkEntier_5 = Number.isInteger(numeros % 5)

for (let numeros = 1; numeros < 30; numeros++) {
  
  checkEntier_3 = Number.isInteger(numeros / 3)
  checkEntier_5 = Number.isInteger(numeros / 5)
  
  if (checkEntier_3 === true && checkEntier_5 === false) {
  console.log('Fizz')
  } 

  if (checkEntier_5 === true && checkEntier_3 === false) {
  
  console.log('Buzz')
  }
  
  if (checkEntier_5 === true && checkEntier_3 === false) {
  
  console.log('Fizbuzz')
  }

  else if (checkEntier_5 === false && checkEntier_3 === false) {

    console.log(numeros)
    
  }
  
} */

/* 3ème façon avec modulo (modulo % => reste de la division) */
for (let i = 1; i <= 30; i++)
{
  if (i % 3 === 0 && i % 5 === 0) { console.log('Fizzbuzz') }
  else if (i % 3 === 0) {console.log('Fizz')}
  else if (i % 5 === 0) { console.log('Buzz') }
  else {console.log(i)}
}

console.log('--------------') 