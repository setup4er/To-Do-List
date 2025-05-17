import { useState, useRef, useEffect } from "react";
import '../styles/UserConsole.css';

export const UserConsole = (
  {addLog, setLogs, logs, onClickDeleteHandler}) => {

  const [inputValue, setInputValue] = useState("");
  const consoleLogRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleEnterPress = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      const [command, ...args] = inputValue.split(" ");
      const taskText = args.join(" ");

      if (command === "delete" && taskText) {
        onClickDeleteHandler(taskText);
      } 
      if(command === "clear") {
        handleClearConsoleCommand();
      }else {
        addLog(`Unknown command: "${command}"`);
      }

      setInputValue("");
    }
  };

  const handleClearConsoleCommand = () =>{
    setLogs(()=>['Logs is cleared']);
  }

  useEffect(() => {
    if (consoleLogRef.current) {
      consoleLogRef.current.scrollTop = consoleLogRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="console-container">
      <div className="console-log" ref={consoleLogRef}>
        {logs.map((log, index) => (
          <div key={index} className="console-message">{log}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        placeholder="Введите команду..."
        className="console-input"
      />
    </div>
  );
};
