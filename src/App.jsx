import { useState } from "react";
import {ToDoWrapper} from "./components/ToDoWrapper";
import {UserConsole} from "./components/UserConsole";

import './styles/App.css'

function App() {
  const [value, setValue] = useState('');
  const [todoListArray, setTodoListArray] = useState([]);

  return (
    <div className="app-container">
      <ToDoWrapper 
        value={value}
        todoListArray={todoListArray}
        setValue={setValue}
        setTodoListArray={setTodoListArray}
      />
      <UserConsole />
    </div>
  );
}

export default App;
