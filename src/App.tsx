import React, { FunctionComponent, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { ToDos } from "./model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: FunctionComponent = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDos[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDos[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = toDos,
      complete = completedToDos;

    if (source.droppableId === "ToDoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ToDoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedToDos(complete)
    setToDos(active)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList
          todos={toDos}
          setTodos={setToDos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
