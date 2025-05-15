import { ToDoSection } from "./ToDoSection";
import '../styles/ToDoWrapper.css'

export function ToDoWrapper({value, todoListArray, setTodoListArray, setValue}) {

  const onChangeInputHandler = (event) => {
    setValue(event.target.value);
  };

  const onClickTodoHandler = () => {
    setTodoListArray([...todoListArray, { text: value ? value : "( none )", isPassed: false }]);
    setValue('');
  };

  const onClickDeleteHandler = (index) => { 
    setTodoListArray(todoListArray.filter((_,i) => i !== index))
  }

  const toggleTodoStatus = (index) => {
    setTodoListArray(
      todoListArray.map((todo, i) =>
        i === index ? { ...todo, isPassed: !todo.isPassed } : todo
      )
    );
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h1>To-do list</h1>
      </div>
      <div className="input-section">
        <input className="input-section-item" type="text" value={value} onChange={onChangeInputHandler} />
        <input className="input-section-item" type="button" value="Add to-do" onClick={onClickTodoHandler} />
      </div>
      <div className="todo-section">
        <ToDoSection 
          onClickDeleteHandler = {onClickDeleteHandler} 
          todoListArray={todoListArray} 
          toggleTodoStatus={toggleTodoStatus}/>
      </div>
    </div>
  );
}