/* Exercice 06: Calculateur de prix avec condition */
console.log('Exercice 06: Calculateur de prix avec condition')

let prixMin = 100
let tva_1 = 0.2
let tva_2 = 0.05
let ht = prompt('Quel est le prix HT ?')
let resulta
let porcentage_1 = (ht * tva_1)
let porcentage_2 = (ht * tva_2)


if (ht < prixMin) {
  resulta = porcentage_1
  
} else {
  resulta = porcentage_2
}
console.log(resulta)
console.log('--------------') 