function validatePassword(password) {

  // Variables
  const minLength = /^.{8,}$/ 
  const haveUpperCase = /[A-Z]/
  const haveLowerCase = /[a-z]/
  const haveNumber = /\d/
  const haveSpecialC = / [!@#$%^&*()":{}<>]/
  
  // Conditions
  if (!minLength.test(password)) {
    return 'The password do have min 8 caracteres'
  }
  else if (!haveUpperCase.test(password)) {
    return 'The password do have min a uppercase'
  }
  else if (!haveLowerCase.test(password)) {
    return 'The password do have min a lowercase'
  }
  else if (!haveNumber.test(password)) {
    return 'The password do have min a number'
  }
  if (!haveSpecialC.test(password)) {
    return 'The password do have min a special character'
  }

  return 'La contraseña es valida'
}


const form = document.querySelector('#passForm')
const message = document.querySelector('#message')

// Event listener
form.addEventListener('submit', (e) => {

  e.preventDefault()

  const password = document.querySelector('#password').value
  const resulte = validatePassword(password)

  if (resulte === 'Valid password') {
    message.textContent = resulte
    message.className = "valide-message"
  } else {
    message.textContent = resulte
    message.className = "error-message"
  }
})