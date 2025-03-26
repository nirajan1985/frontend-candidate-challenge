import { Todo } from "../App";
import { InputTodoForm } from "./InputTodoForm";
import { TodoList } from "./TodoList";

interface TodoContainerProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoContainer = ({ todos, setTodos }: TodoContainerProps) => {
  const handleAddTodo = (newtodoText: string) => {
    setTodos((prev) => [
      { id: Math.random(), text: newtodoText, done: false },
      ...prev,
    ]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <div>
      <InputTodoForm
        onSubmit={handleAddTodo}
        buttonLabel="Add"
        initialValue=""
      />
      <TodoList
        todos={todos}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};
