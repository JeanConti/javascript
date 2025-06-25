let taskList_1 = JSON.parse(localStorage.getItem('text')) || []

addTaskBtn.addEventListener('click', () => {

  let textValue = taskInput.value

  taskList_1.push(textValue)
  result.innerHTML = taskList_1
  localStorage.setItem('textValue', taskList_1)

})

