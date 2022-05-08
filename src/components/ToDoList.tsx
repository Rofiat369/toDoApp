import React, { FunctionComponent } from "react";
import { ToDos } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css";


interface ToDoListProps {
    todos: ToDos[];
    setTodos: React.Dispatch<React.SetStateAction<ToDos[]>>;
}

const ToDoList:FunctionComponent<ToDoListProps> = ({todos, setTodos}) => {
    return (
        <div className="todos">
            {todos.map(todo => (
                <SingleToDo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setToDos={setTodos}
                />
            ))}
        </div>
    )
}

export default ToDoList