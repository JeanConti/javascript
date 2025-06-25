/* DOM REFERENCES */
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

// Boton function
addTaskBtn.addEventListener('click', () => {
  
  let p = document.createElement('p')
  // p.classList.add('p-style ')
  p.innerHTML = taskInput.value
  taskList.appendChild(p)
  taskInput.value = ''

  p.addEventListener('click', () => {
    p.style.textDecoration = 'line-through'
  })
  p.addEventListener('dblclick', () => {
  taskList.removeChild(p)
  })

  p.createElement('button')
})

function saveTask() {
  localStorage.setItem('task', JSON.stringify(task))
}