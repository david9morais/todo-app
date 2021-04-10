import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <p>
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)} 
                />
                <span style={props.item.completed ? completedStyle: null}>{props.item.text}</span>
            </p>
        </div>
    )
}

export default TodoItem