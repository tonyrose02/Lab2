import {ref, set,get, push,child,remove,update} from 'firebase/database'
import {db} from '../lib/firebase/config/firebaseInit'
import { createStore , removeFromStore,updateStore } from './store'

let observers = []

export function subscribe(fn){
    observers.push(fn)
    console.log(observers)

}export function notify(data){
    observers.forEach((observer) => observer(data))
}
export async function getToDoData()
{
    const dbRef = ref(db,'todos')
    const response = await get(dbRef)
    let payload = await response.val()
    payload = Object.entries(payload)
    let todoItems = payload.map((item)=>{
        return {...item[1], uid: item[0]}
    })
    if(await createStore(todoItems))
    {
        notify(todoItems)
    }

}


export function deleteToDo (uid)
{
  const dbRef = ref(db, `todos/${uid}`)
  remove(dbRef)
  const store = removeFromStore(uid)
  notify(store)
}
export function updateTodo (updateTodo)
{
  let payload = updateTodo
  const dbRef = ref(db,`todos/${payload.uid}`)
  update(dbRef,payload)
  const store = updateStore(payload)
  notify(store)
}
export function addTodo (createTodo)
{
  const dbRef = ref(db,`todos`)
  push(dbRef,createTodo).key
  const store = updateStore(createTodo)
  notify(store)
}