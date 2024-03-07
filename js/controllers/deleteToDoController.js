import { deleteToDo } from "../models/toDoListModel"

let dialog
let deleteButton
let exitButton
let uid

export function deleteToDoController (itemUid)
{
  uid = itemUid
  dialog = document.querySelector('#delete-to-do')
  exitButton = dialog.querySelector('#exit')
  deleteButton = dialog.querySelector('#delete')
  configureListener()
  dialog.showModal()
}

function configureListener()
{
  exitButton.addEventListener('click', onCloseDialog)
  deleteButton.addEventListener('click', onRemoveTodo)
}

function onCloseDialog (e)
{
  dialog.close()
}
function onRemoveTodo (e)
{
   deleteToDo(uid)
   onCloseDialog()
}