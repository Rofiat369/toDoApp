import React, { FunctionComponent } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
