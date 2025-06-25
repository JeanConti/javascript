let userNameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let letter = document.getElementById('letter')
let number = document.getElementById('number')
let length = document.getElementById('length')

// Quand l'utilisateur clique sur le input du mot de passe, affiche la boîte de message
passwordInput.onfocus = () => {document.getElementById('message').style.display = 'block'}

// Quand l'utilisateur clique en dehors du input du mot de passe, affiche la boîte de message
passwordInput.onblur = () => { document.getElementById('message').style.display = 'none' }

// Quand l'utilisateur commence a écrire quelque chose dans l'input du mot de passe
passwordInput.onkeyup = () => {

  // Validation des minuscules 
  let minuculas = /[a-z]/g
  if (passwordInput.value.match(minuculas)) {
    letter.classList.remove('invalid')
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid')
    letter.classList.add('invalid')
  }

   // Validation des mayusculea
  let mayusculas = /[A-Z]/g
  if (passwordInput.value.match(mayusculas)) {
    letter.classList.remove('invalid')
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid')
    letter.classList.add('invalid')
  }

  // Validation des nombres
  let numbers = /[0-9]/g
  if (passwordInput.value.match(numbers)) {
    letter.classList.remove('invalid')
    letter.classList.add('valid')
  } else {
    letter.classList.remove('valid')
    letter.classList.add('invalid')
  }
 
bb  

}
