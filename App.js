import React, {useState} from 'react';//
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const[inputText,setInputText]=useState("");//
  const[todos,setTodos]=useState([]);//array of inputs

  return (
    <div className="App">
      
    <Form inputText={inputText}
          setInputText={setInputText}
          todos={todos} 
          setTodos={setTodos}/>

    <Todolist />

    </div>
  );
}

export default App;
