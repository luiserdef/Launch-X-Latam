import { useState } from 'react'
import FormTodo from './components/FormTodo'
import './App.scss'
import TodoList from './components/TodoList'

function App() {
const [todoItem,setTodoItem]=useState('')
const [taskLists,setTaskLists] = useState([])

function addTask(){
  setTaskLists(oldTask => [...oldTask,{taskName:todoItem,checked:false}])
  setTodoItem('')
}

function changeCheckedList(id){

  setTaskLists(last=>{
    return last.map((task,index)=>{
      if(index === id){
        return {...task,checked:!task.checked}
      }
      return task
    })
  })
}

function clear(){
    setTaskLists(last=>{
    return last.filter(task=>task.checked != true)
  })
}
console.log(taskLists)
  return (
    <div className="App">
        <div className="todo-box">
          <div className="container">
            <FormTodo setTodoItem={setTodoItem} todoItem={todoItem} addTask={addTask}/>
            {taskLists.map((task,index)=>{
              return <TodoList 
              key={index} 
              id={index} 
              task={task}
              changeCheckedList={changeCheckedList}/>
            })}
            <button onClick={clear}>Eliminar Tareas</button>
          </div>
        </div>
    </div>
  )
}

export default App
