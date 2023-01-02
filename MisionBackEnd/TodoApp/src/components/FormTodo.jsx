import React from "react";

const FormTodo = (props)=>{

    const handleItemTodo = (e) =>{
        e.preventDefault()
        props.addTask()
    }

    return(
    <>
        <form>
            <input 
            onChange={(e)=>props.setTodoItem(e.target.value)} 
            className ="input-todo" 
            type="text" 
            value={props.todoItem}
            placeholder="Inserte Tarea"/>
            
            <button onClick={(e)=>handleItemTodo(e)} className="bt-add">Agregar Tarea</button>
        </form>
    </>
    )
}

export default FormTodo

