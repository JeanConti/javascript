/* Exercice 05: Conditions simples */
console.log('Exercice 05: Conditions simples')
let question = prompt('Quel âge avez-vous?')

if (question < 18) {
  console.log('Vous êtes mineur')
} else {
  console.log('Vous êtes majeur')
} 


/* 
console.log('Exercice 05 v2')
function checkAge() {
  
  let demandeAge = parseInt(prompt('Quel âge avez-vous'))
  if (Number.isInteger(demandeAge) && demandeAge < 18) {
    console.log('Vous êtes mineur ')
  } else if (Number.isInteger(demandeAge) && demandeAge >= 18) {
    console.log('Vous êtes majeur ')
  }
}

checkAge() */
console.log('--------------')
