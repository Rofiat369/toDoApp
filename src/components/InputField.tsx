import React, { FunctionComponent } from "react";
import "./styles.css";

interface InputFieldProps{
    toDo: string;
    setToDo:React.Dispatch<React.SetStateAction<string>>;
}

const InputField: FunctionComponent<InputFieldProps> = ({toDo, setToDo}) => {
  return (
    <form className="input">
      <input type="input"
      value={toDo}
      onChange={(event) => setToDo(event.target.value)}
       placeholder="Enter a task" 
       className="input__box" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
