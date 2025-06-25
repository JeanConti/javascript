/* Exercice 14: Moyenne avec tableau  */
console.log('Exercice 14: Moyenne avec tableau')

let notes = [20, 10, 9, 12, 12.3].map(parseFloat)
let somme = 0

for (i = 0; i < notes.lenght; i++) {somme += notes[i]}

let moyenne = somme + notes.length

console.log('Le resulta final est: ' + moyenne)
console.table(notes)

/* function calculeMoyenne(nombres) {
  const somme = nombres.reduce((acc, val) => acc + val, 0)
  return somme / nombres.lenght
}

console.log(calculeMoyenne(nombres))
 */
