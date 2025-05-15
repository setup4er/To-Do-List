import { useState } from "react";

import '../styles/UserConsole.css';

export const UserConsole = () => {
  const [logs, setLogs] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    let time = new Date();
    const [hours, minutes, seconds] = [String(time.getHours()), String(time.getMinutes()), String(time.getSeconds())];

    if (event.key === "Enter" && inputValue.trim()) {
      setLogs([...logs, `[${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}] ${inputValue}`]);
      
      setInputValue("");
    }
  };

  return (
    <div className="console-container">
      <div className="console-log">
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
