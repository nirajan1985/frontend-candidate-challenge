import React, { useState } from "react";

import { TodoContainer } from "./components/TodoContainer";

import "./styles.scss";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Math.random(), text: "Buy milk", done: true },
    { id: Math.random(), text: "Buy bread", done: false },
  ]);

  console.log(todos);
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />

      <TodoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}
