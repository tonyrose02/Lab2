
import { addTodo } from "../models/toDoListModel"
let dialog
let closeButton
let exitButton
let form
let uid


export function addTodoController (itemUid)
{
  uid = itemUid
  
  dialog = document.querySelector('#create-to-do')
  exitButton = dialog.querySelector('#exit')
  closeButton = dialog.querySelector('#close')
  form = dialog.querySelector('form')
  configureListeners()
  dialog.showModal()
}



function configureListeners()
{
  exitButton.addEventListener('click',onCloseDialog)
  closeButton.addEventListener('click',onCloseDialog)
  form.addEventListener('submit',onCreateToDoItem)
}
function onCreateToDoItem (e)
{
  e.preventDefault()
  const todo = e.currentTarget.todo.value.trim()
  const category = e.currentTarget.category.value.trim()
  const status = e.currentTarget.status.value.trim()
  addTodo({
    todo,
    category,
    status,
    uid,
  })
  
}
function onCloseDialog (e)
{
  dialog.close()
}