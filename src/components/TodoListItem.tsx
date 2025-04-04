import React, { useState } from "react";
import { Todo } from "../App";
import { InputTodoForm } from "./InputTodoForm";

interface TodoListItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

export const TodoListItem = ({
  todo,
  onDelete,
  onToggle,
  onUpdate,
}: TodoListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const saveEditing = (id: number, text: string) => {
    onUpdate(id, text);
    setIsEditing(false);
  };

  return (
    <li data-testid="todoItem">
      {!isEditing && (
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="doneCheckbox"
        />
      )}

      {isEditing ? (
        <>
          <InputTodoForm
            initialValue={todo.text}
            buttonLabel="Save"
            onSubmit={(text) => saveEditing(todo.id, text)}
          />
        </>
      ) : (
        <>
          <span className={todo.done ? "done" : ""}>{todo.text}</span>
          <button onClick={() => startEditing()}>Edit</button>
        </>
      )}

      {!isEditing && <button onClick={() => onDelete(todo.id)}>Delete</button>}
    </li>
  );
};
