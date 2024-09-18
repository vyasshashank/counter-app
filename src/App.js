import React, { useState } from 'react';
import './App.css'; // Make sure this file is styled similarly to your example

function App() {
  const [records, setRecords] = useState([
    { name: "pineapple" },
    { name: "kiwi" },
    { name: "watermelon" },
    { name: "Mango" },
    { name: "papaya" },
    { name: "blueberry" }
  ]);

  const [showElement, setShowElement] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [textboxValue, setTextboxValue] = useState('');
  const [children, setChildren] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const addChild = () => setChildren([...children, `Child ${children.length + 1}`]);

  const filteredRecords = records.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>React Learning Tasks</h1>

      {/* Task 1: Small Programming Learning Tasks */}
      <div className="task-section">
        <h2>Task 1: Small Programming Learning Tasks</h2>

        <section>
          <h3>Display Simple JSX</h3>
          <p>Hello, React!</p>
        </section>

        <section>
          <h3>Display an Array of Records</h3>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Show/Hide Element</h3>
          <button onClick={() => setShowElement(!showElement)}>
            {showElement ? "Hide" : "Show"} Element
          </button>
          {showElement && <p>This is a toggled paragraph.</p>}
        </section>

        <section>
          <h3>Enable/Disable a Button</h3>
          <label>
            <input
              type="checkbox"
              checked={isButtonDisabled}
              onChange={() => setIsButtonDisabled(!isButtonDisabled)}
            />
            Enable Button
          </label>
          <button disabled={isButtonDisabled}>Click Me!</button>
        </section>

        <section>
          <h3>2-Way Data Binding</h3>
          <input
            type="text"
            value={textboxValue}
            onChange={e => setTextboxValue(e.target.value)}
            placeholder="Type something..."
          />
          <p>Typed Text: {textboxValue}</p>
        </section>

        <section>
          <h3>Dynamically Add Child Components</h3>
          <button onClick={addChild} disabled={isButtonDisabled}>
            Add Child
          </button>
          <ul>
            {children.map((child, index) => (
              <li key={index}>{child}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Sum of Two Numbers</h3>
          <input
            type="number"
            value={num1}
            onChange={e => setNum1(Number(e.target.value))}
            placeholder="Number 1"
          />
          <input
            type="number"
            value={num2}
            onChange={e => setNum2(Number(e.target.value))}
            placeholder="Number 2"
          />
          <p>Sum: {num1 + num2}</p>
        </section>
      </div>

      {/* Task 2: Create a Counter */}
      <div className="task-section">
        <h2>Task 2: Create a Counter</h2>
        <div className="counter">
          <button onClick={() => setCounter(counter - 1)}>Decrease</button>
          <span>{counter}</span>
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>

      {/* Task 3: Build Search Filter */}
      <div className="task-section">
        <h2>Task 3: Build Search Filter</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search records..."
        />
        <p>Found {filteredRecords.length} items</p>
        <ul>
          {filteredRecords.map((record, index) => (
            <li key={index}>{record.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
