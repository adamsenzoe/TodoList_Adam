import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);

  //state untuk filter aktif
  const [activeFilter, setActiveFilter] = useState("All");

  // fungsi status
  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;

    setTodos([...cloneTodos]);
  };

  // fungsi edit
  const handleEdit = (todo) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };

  // fungsi delete
  const handleDelete = (index) => {
    let cloneTodos = [...todos];
    cloneTodos.splice(index, 1); // Menghapus elemen pada index tertentu
    setTodos([...cloneTodos]);
  };

  //Fungsi untuk memfilter tugas berdasarkan status
  const filterTodos = () => {
    switch (activeFilter) {
      case "Active":
        return todos.filter((todo) => !todo.status);
      case "Complete":
        return todos.filter((todo) => todo.status);
      default:
        return todos;
    }
  };

  return (
    <div>
      <div className="w-full rounded-[20px] flex gap-5 bg-blue-800 text-white mt-[10px] mb-[10px] px-[20px]">
        <button
          className="p-[5px] hover:text-yellow-500"
          onClick={() => setActiveFilter("All")}
        >
          All
        </button>
        
        <button
          className="p-[5px] hover:text-yellow-500"
          onClick={() => setActiveFilter("Active")}
        >
          Active
        </button>

        <button
          className="p-[5px] hover:text-yellow-500"
          onClick={() => setActiveFilter("Complete")}
        >
          Complete
        </button>
      </div>

      {filterTodos().map((todo, index) => (
        <div key={todo.id} className="flex flex-row justify-between">
        <label>
            <input
              className="mr-[10px]"
              type="checkbox"
              checked={todo.status}
              onChange={() => handleStatus(index)}
            />
            <span
              className={todo.status ? "line-through bg-green-400" : ""}
            >
              {todo.value}
              {todo.status && (
                <span style={{ marginLeft: "8px" }}>(sudah selesai)</span>
              )}
            </span>
          </label>
          <div>
            <button onClick={() => handleEdit(todo)}>✏️</button>
            <button onClick={() => handleDelete(index)}>❌</button>
          </div>
        </div>
      ))}
      
    </div>
  );
}

export default TodoList;
