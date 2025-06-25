let demandeSurface = alert('Introduzca el ancho y el largo por favor')

function calculeSurface() {

  let ancho = parseFloat(document.getElementById('ancho').value)
  let largo = parseFloat(document.getElementById('largo').value)
  let surperficie = ancho * largo

  document.getElementById('resultado').innerHTML = `La surface du rectangle est de ${surperficie} m2`

}



