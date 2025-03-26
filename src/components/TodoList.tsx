import { Todo } from "../App";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

export const TodoList = ({
  todos,
  onDelete,
  onToggle,
  onUpdate,
}: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};
