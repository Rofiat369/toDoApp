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
        <div className="container">
        <div className="todos">
            <span className="todo__heading">Active Tasks</span>
            {todos.map(todo => (
                <SingleToDo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setToDos={setTodos}
                />
            ))}
        </div>
        <div className="todos remove">
        <span className="todo__heading">Completed Tasks</span>
            {todos.map(todo => (
                <SingleToDo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setToDos={setTodos}
                />
            ))}
        </div>
    </div>
    )
}

export default ToDoList