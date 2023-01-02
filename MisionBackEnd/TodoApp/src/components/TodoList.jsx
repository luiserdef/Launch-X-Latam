import React from "react";

function TodoList (props){
console.log("task: "+props.task.taskName)
console.log("checked?: "+props.task.checked)
    return(
        <div className="card">
            <input 
                onChange={()=>props.changeCheckedList(props.id)}
                checked={props.task.checked} 
                type="checkbox" 
            />
            <p>{props.task.taskName}</p>

        </div>
    )
}

export default TodoList