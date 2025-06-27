let userName = document.getElementById('username')
let password = document.getElementById('password')
let letter = document.getElementById('letter')
let capital = document.getElementById('capital')
let number = document.getElementById('number')
let lenGth = document.getElementById('length')

// Quand l'utilisateur clique sur le input du mot de passe, affiche la boîte de message
passwordInput.onfocus = () => {document.getElementById('message').style.display = 'block'}

// Quand l'utilisateur clique en dehors du input du mot de passe, affiche la boîte de message
passwordInput.onblur = () => { document.getElementById('message').style.display = 'none' }

// Quand l'utilisateur commence a écrire quelque chose dans l'input du mot de passe
passwordInput.onkeyup = () => {

  // Validation des minuscules 
  let minuculas = /[a-z]/g
  if (password.value.match(minuculas)) {
    letter.classList.remove('invalid')
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid')
    letter.classList.add('invalid')
  }

   // Validation des mayusculea
  let mayusculas = /[A-Z]/g
  if (password.value.match(mayusculas)) {
    capital.classList.remove('invalid')
    capital.classList.add('valid')
  } else {
    capital.classList.remove('valid')
    capital.classList.add('invalid')
  }

  // Validation des nombres
  let numbers = /[0-9]/g
  if (password.value.match(numbers)) {
    number.classList.remove('invalid')
    number.classList.add('valid')
  } else {
    number.classList.remove('valid')
    number.classList.add('invalid')
  }

  // Valider la longueur

  if (length.value.length >= 8 && length.value.length <= 16) {
    lenGth.classList.remove('invalid')
    lenGth.classList.add('valid')
  } else {
    lenGth.classList.remove('valid')
    lenGth.classList.add('invalid')
  }


}
