import { useState, useRef, useEffect } from "react";
import '../styles/UserConsole.css';

export const UserConsole = () => {
  const [logs, setLogs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const consoleLogRef = useRef(null); // Создаём реф для прокрутки

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    const time = new Date();
    const [hours, minutes, seconds] = [String(time.getHours()), String(time.getMinutes()), String(time.getSeconds())];
    const timeLog = `[${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}]`;

    if (event.key === "Enter" && inputValue.trim()) {
      setLogs((prevLogs) => [...prevLogs, `${timeLog} ${inputValue}`]);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (consoleLogRef.current) {
      consoleLogRef.current.scrollTop = consoleLogRef.current.scrollHeight;
    }
  }, [logs]); // Прокрутка вниз при изменении логов

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
