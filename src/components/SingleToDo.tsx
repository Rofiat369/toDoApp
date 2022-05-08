import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { ToDos } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

interface SingleToDoProps {
  todo: ToDos;
  todos: ToDos[];
  setToDos: React.Dispatch<React.SetStateAction<ToDos[]>>;
}

const SingleToDo: FunctionComponent<SingleToDoProps> = ({
  todo,
  todos,
  setToDos,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(event) => handleEdit(event, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editToDo}
          onChange={(event) => setEditToDo(event.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
