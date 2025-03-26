import React from "react";

import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("TodoApp", () => {
  it("Should render app component with two initial todos", () => {
    render(<App />);

    const firstTodo = screen.getByText("Buy milk");
    const secondTodo = screen.getByText("Buy bread");

    expect(firstTodo).toBeInTheDocument();
    expect(secondTodo).toBeInTheDocument();
  });

  // TODO: Test app functionality: Create, edit, delete, mark as done.
  it("Should create a new todo", async () => {
    render(<App />);

    const addBtn = screen.getByRole("button", { name: "Add" });
    const addInput = screen.getByPlaceholderText("Enter new todo");

    await userEvent.type(addInput, "Buy apple");
    await userEvent.click(addBtn);

    const todoItems = screen.getAllByTestId("todoItem");
    expect(todoItems.length).toBe(3);
  });

  it("Should delete a todo", async () => {
    render(<App />);

    const deleteBtns = screen.getAllByRole("button", { name: "Delete" });
    await userEvent.click(deleteBtns[0]);

    const todoItems = screen.getAllByTestId("todoItem");
    expect(todoItems.length).toBe(1);
  });

  it("Should edit todo", async () => {
    render(<App />);

    const editBtns = screen.getAllByRole("button", { name: "Edit" });
    await userEvent.click(editBtns[0]);

    const inputboxes = screen.getAllByPlaceholderText("Enter new todo");
    await userEvent.clear(inputboxes[1]);
    await userEvent.type(inputboxes[1], "Buy oat milk");

    const saveBtn = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveBtn);

    const updatedText = screen.getByText("Buy oat milk");
    expect(updatedText).toBeInTheDocument();
  });

  it("Should toggle todo", async () => {
    render(<App />);

    const toggleCheckboxes = screen.getAllByRole("checkbox");

    expect(toggleCheckboxes[0]).toBeChecked();

    await userEvent.click(toggleCheckboxes[0]);

    expect(toggleCheckboxes[0]).not.toBeChecked();
  });
});
