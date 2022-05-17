import React from "react";
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Login from "./components/Login/Login.js";
import TodoList from './components/Todo/TodoList';
function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Login />} />
        
            <Route path="/todolist" element={<TodoList/>} />
      </Routes>
       
        
    </Router>
    
  );
}

export default App;
