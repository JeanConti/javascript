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
password.onkeyup = () => {

  // Validation des minuscules 
  let minuculas = /[a-z]/g
  if (password.value.match(minuculas)) {
    letter.classList.remove('message-error')
    letter.classList.add('message-valid')
  } else {
    letter.classList.remove('message-valid')
    letter.classList.add('message-error')
  }

   // Validation des mayusculea
  let mayusculas = /[A-Z]/g
  if (password.value.match(mayusculas)) {
    capital.classList.remove('message-error')
    capital.classList.add('message-valid')
  } else {
    capital.classList.remove('valid')
    capital.classList.add('message-error')
  }

  // Validation des nombres
  let numbers = /[0-9]/g
  if (password.value.match(numbers)) {
    number.classList.remove('message-error')
    number.classList.add('message-valid')
  } else {
    number.classList.remove('message-valid')
    number.classList.add('message-error')
  }

  // Valider la longueur

  if (lengGth.value.length >= 8 && lengGth.value.length <= 16) {
    lenGth.classList.remove('invalid')
    lenGth.classList.add('valid')
  } else {
    lenGth.classList.remove('valid')
    lenGth.classList.add('invalid')
  }


}
