personnes = [
  
  {
  prenom: 'Jean-Michel',
  nom: 'Conti',
  age: 35,
  },

  {
  prenom: 'David',
  nom: 'Perez',
  age: 25,
  },
  
  {
  prenom: 'Juan',
  nom: 'Perez',
  age: 45,
  },
]

for (let i = 0; i < personnes.length; i++) {
  // console.log(personnes[i])
  console.table(personnes[i])
}