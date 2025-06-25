let userNameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let minuculas = document.getElementById('minuculas')
let mayusculas = document.getElementById('mayusculas')
let number = document.getElementById('number')

// Quand l'utilisateur clique sur le input du mot de passe, affiche la boîte de message
passwordInput.onfocus = () => {document.getElementById('message').style.display = 'block'}

// Quand l'utilisateur clique en dehors du input du mot de passe, affiche la boîte de message
passwordInput.onblur = () => { document.getElementById('message').style.display = 'none' }

// Quand l'utilisateur commence a écrire quelque chose dans l'input du mot de passe
passwordInput.onkeyup = () => {
  // Validation des minuscules 
  let minuculas = /[a-z]
}