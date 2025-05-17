
import React from "react"
import passedPng from '../assets/passed.png'
import failedPng from '../assets/failed.png'
import '../styles/ToDoSection.css'

export const ToDoSection = ({onClickDeleteHandler, todoListArray, toggleTodoStatus}) =>{
    return todoListArray.map((todo, index) => (

          <div key={index} className="todo-item">
            
            <img className="statusPng" 
            src={passedPng} 
            alt="" 
            draggable="false" 
            style={{
              display: todo.isPassed ? "inline" : "none"
            }}/>
            <img className="statusPng" 
            src={failedPng} 
            alt="" 
            draggable="false" 
            style={{
              display: todo.isPassed || todo.text === "( none )" ? "none" : "inline"
            }}/>
            <span style={{ // Text 
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
            onClick={() => onClickDeleteHandler(todoListArray[index].text)}
            />

          </div>
        ))
}

