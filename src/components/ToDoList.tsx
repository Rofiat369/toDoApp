import React, { FunctionComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ToDos } from "../model";
import SingleToDo from "./SingleToDo";
import "./styles.css";

interface ToDoListProps {
  todos: ToDos[];
  setTodos: React.Dispatch<React.SetStateAction<ToDos[]>>;
  completedToDos: ToDos[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDos[]>>;
}

const ToDoList: FunctionComponent<ToDoListProps> = ({ todos, setTodos, completedToDos, setCompletedToDos }) => {
  return (
    <div className="container">
      <Droppable droppableId="ToDoList">
        {(provided, snapshot) => (
          <div className={`todos ${snapshot.isDraggingOver? "dragactive": ""}`} ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todo__heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleToDo
              index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setToDos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
<Droppable droppableId="ToDoRemove">
    {(provided, snapshot) => (
        <div className={`todos remove ${snapshot.isDraggingOver? "dragcomplete": ""}`} ref={provided.innerRef} {...provided.droppableProps}>
        <span className="todo__heading">Completed Tasks</span>
        {completedToDos.map((todo, index) => (
          <SingleToDo
          index={index}
            todo={todo}
            key={todo.id}
            todos={completedToDos}
            setToDos={setCompletedToDos}
          />
        ))}
        {provided.placeholder}
      </div>
    )}
      
      </Droppable>
    </div>
  );
};

export default ToDoList;
