
import { addTodo } from "../models/toDoListModel"
let dialog
let closeButton
let exitButton
let form


export function addTodoController ()
{
  dialog = document.querySelector('#create-to-do')
  exitButton = dialog.querySelector('#exit')
  closeButton = dialog.querySelector('#close')
  form = dialog.querySelector('form')
  configureListeners()
  dialog.showModal()
  form.reset()
}


function configureListeners()
{
  exitButton.addEventListener('click',onCloseDialog)
  closeButton.addEventListener('click',onCloseDialog)
  form.addEventListener('submit',onAddToDoItem)
}
function onAddToDoItem (e)
{
  e.preventDefault()
  const todo = e.currentTarget.todo.value.trim()
  const category = e.currentTarget.category.value.trim()
  const status = e.currentTarget.status.value.trim()
  addTodo({
    todo,
    category,
    status,
  })
}
function onCloseDialog (e)
{
  dialog.close()
}
