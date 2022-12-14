import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1> To-Do List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList />
    </div>
  );
}

export default App;
