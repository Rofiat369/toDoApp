import React, { FunctionComponent, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDos } from './model';

const App: FunctionComponent = () => {
const [toDo, setToDo] = useState<string>("")
const [toDos, setToDos] = useState<ToDos[]>([]);

const handleAdd = (event: React.FormEvent)=>{
  event.preventDefault();

  if(toDo){
    setToDos([...toDos, {id: Date.now(), todo: toDo, isDone: false}])
    setToDo("")
  }
}

console.log(toDos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList todos={toDos} setTodos={setToDos} />
    </div>
  );
}

export default App;
