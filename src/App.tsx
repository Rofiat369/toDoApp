import React, { FunctionComponent, useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: FunctionComponent = () => {
const [toDo, setToDo] = useState<string>("")
console.log(toDo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
