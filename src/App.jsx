import { useState } from "react";
import ToDoWrapper from "./components/ToDoWrapper";

function App() {
  const [value, setValue] = useState('');
  const [todoListArray, setTodoListArray] = useState([]);

  return (
    <ToDoWrapper value={value} 
    todoListArray={todoListArray}
    setValue={setValue}
    setTodoListArray={setTodoListArray}/>
  );
}

export default App;
