function validate(password) {
  const minLength = /^.{8}$/
  const haveUpperCase = /[A-Z]/
  const haveLowerCase = /[a-z]/
  const haveNumber = /\d/
  const haveSpecialC = / [!@#$%^&*()":{}<>]/
  
  if (!minLength.test(password)) {
    return 'La contraseña debe tener al menos 8 caracteres'
  }
  if (!haveUpperCase.test(password)) {
    return 'La contraseña debe tener al menos una mayuscula'
  }
  if (!haveLowerCase.test(password)) {
    return 'La contraseña debe tener al menos una minuscula'
  }
  if (!haveNumber.test(password)) {
    return 'La contraseña debe tener al menos un numero'
  }
  if (!haveSpecialC.test(password)) {
    return 'La contraseña debe tener al menos un carácter especial'
  }

  return 'La contraseña es valida'
}

const form = document.getElementById('passForm')
const message = document.getElementById('message')

form.addEventListener('submit', () => {
  e.preventDefault()
})