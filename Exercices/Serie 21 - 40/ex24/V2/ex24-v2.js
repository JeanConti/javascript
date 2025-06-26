function validatePassword(password) {
  const minLength = /^.{8}$/
  const haveUpperCase = /[A-Z]/
  const haveLowerCase = /[a-z]/
  const haveNumber = /\d/
  const haveSpecialC = / [!@#$%^&*()":{}<>]/
  
  if (!minLength.test(password)) {
    return 'The password do have min 8 caracteres'
  }
  if (!haveUpperCase.test(password)) {
    return 'The password do have min a uppercase'
  }
  if (!haveLowerCase.test(password)) {
    return 'The password do have min a lowercase'
  }
  if (!haveNumber.test(password)) {
    return 'The password do have min a number'
  }
  if (!haveSpecialC.test(password)) {
    return 'The password do have min a special characters'
  }

  return 'La contraseña es valida'
}

const form = document.getElementById('passForm')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {

  e.preventDefault()

  const password = document.getElementById('password').value
  const resulte = validatePassword(password)

  if (resulte === 'Valid password') {

  }
})