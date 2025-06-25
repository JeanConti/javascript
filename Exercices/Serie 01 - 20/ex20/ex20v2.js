let taskInput = document.getElementById('taskInput')
let addTaskBtn = document.getElementById('addTaskBtn')
let taskList = document.getElementById('taskList')
let spaceStageName = 'myList'


function saveTask() {

  let tasks = []

  taskList.querySelectorAll('li').forEach(li => {
    let text = li.firstChild.textContent
    console.log(text)
    tasks.push(text)
  })

  localStorage.setItem(spaceStageName, tasks).JSON.stringify()
}


function removeTask() {

  localStorage.getItem(spaceStageName, tasks).JSON.stringify()

  spaceStageName.remove(task)

}


function addTask() {

  // Récupère la valeur de l'input
  let taskValue = taskInput.value.trim()

  if (taskValue !== '') {

    // Afficher dans des li les tâches
    let newli = document.createElement('li') // Crea un elemento li
    newli.innerHTML = taskValue
    
    // Le da el valor del texto + un boton
    newli.innerHTML = `<span>${taskValue}</span> <button>Delete</button>` 

    taskList.appendChild(newli) // Añade el nuevo li a la lista
    newli.querySelector('button').addEventListener('click', () => {newli.remove()})
    
    
    // Vider le champ texte pour saisir un nouveau texte
    taskInput.value = ''

    // Sauvegarde le texte dans le LocalStorage
    saveTask()

    // Elimine le texte dans le LocalStorage
    removeTask()

  }
  
}


addTaskBtn.addEventListener('click', addTask)

function loadTask() {
  
  // Récuperer 
  localStorage.getItem(spaceStageName, tasks).JSON.stringify()

}

document.addEventListener('DOMContentLoaded', loadTask)