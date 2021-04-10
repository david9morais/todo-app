import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p>
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)} 
                />
                <span>{props.item.text}</span>
            </p>
        </div>
    )
}

export default TodoItem