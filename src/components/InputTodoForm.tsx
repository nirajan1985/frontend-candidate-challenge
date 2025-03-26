import { useState } from "react";

interface InputTodoFormProps {
  onSubmit: (text: string) => void;
  initialValue: string;
  buttonLabel: string;
}

export const InputTodoForm = ({
  onSubmit,
  initialValue,
  buttonLabel,
}: InputTodoFormProps) => {
  const [newtodoText, setNewtodoText] = useState(initialValue);

  const handleSubmit = () => {
    onSubmit(newtodoText);
    setNewtodoText("");
  };
  return (
    <div className="addTodo">
      <input
        type="text"
        value={newtodoText}
        onChange={(e) => setNewtodoText(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleSubmit}>{buttonLabel}</button>
    </div>
  );
};
