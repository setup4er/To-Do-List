import { ToDoSection } from "./ToDoSection";
import '../styles/ToDoWrapper.css'

export function ToDoWrapper({value, todoListArray, setTodoListArray, setValue, addLog, onClickDeleteHandler}) {

  const onChangeInputHandler = (event) => {
    setValue(event.target.value);
  };

  const onClickTodoHandler = () => {
    setTodoListArray([...todoListArray, { text: value ? value : "( none )", isPassed: false }]);
    addLog('$Task added: {text: "'+ value + '", isPassed: false}');
    setValue('');
  };

  const toggleTodoStatus = (index) => {
    setTodoListArray((prevList) => {
      const updatedList = prevList.map((todo, i) =>
        i === index ? { ...todo, isPassed: !todo.isPassed } : todo
      );

      const changedTask = updatedList[index]; 
      addLog(`$Task changed: {text: "${changedTask.text}", isPassed: ${changedTask.isPassed}}`);

      return updatedList;
    });
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