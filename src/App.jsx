import { useState } from "react";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { UserConsole } from "./components/UserConsole";

import './styles/App.css'

function App() {
  const [value, setValue] = useState('');
  const [todoListArray, setTodoListArray] = useState([]);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  const onClickDeleteHandler = (taskText) => { 
    setTodoListArray((prevList) => {
      const updatedList = prevList.filter(todo => todo.text !== taskText);
      
      if (prevList.length === updatedList.length) {
        addLog(`$Task "${taskText}" not found!`);
      } else {
        addLog(`$Task deleted: {text: "${taskText}"}`);
      }

      return updatedList;
    });
  };

  return (
    <div className="app-container">
      <ToDoWrapper 
        value={value}
        todoListArray={todoListArray}
        setValue={setValue}
        setTodoListArray={setTodoListArray}
        addLog={addLog}
        onClickDeleteHandler={onClickDeleteHandler}
      />
      <UserConsole
        addLog={addLog}  
        logs={logs}
        setLogs={setLogs}
        onClickDeleteHandler={onClickDeleteHandler} />
    </div>
  );
}

export default App;
