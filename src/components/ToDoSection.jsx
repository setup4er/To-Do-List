
import React from "react"

export const ToDoSection = ({onClickDeleteHandler, todoListArray, toggleTodoStatus}) =>{
    return todoListArray.map((todo, index) => (
          // Text
          <div key={index} className="todo-item">
            <span style={{ 
              textDecoration: todo.isPassed ? 'line-through' : 'none',
              color: todo.isPassed ? 'green' : 'black' 
              }}>
              {todo.text}
            </span>

            <input //checkbox
              className="todo-activity"
              type="checkbox"
              checked={todo.isPassed}
              style={{
                display: todo.text === '( none )' ? 'none' : 'inline'
              }}
              onChange={() => toggleTodoStatus(index)}
            />

            <input //cross button
            className="todo-activity"
            type="button" 
            value="X" 
            onClick={() => onClickDeleteHandler(index)}
            />

          </div>
        ))
}

