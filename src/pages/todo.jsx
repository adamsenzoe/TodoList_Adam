import React from "react";
import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";
import TodoInfo from "../components/todo-info";

function Todo() {
  return (
    <div className="font-serif p-4 w-full bg-blue-200 h-[450px] sm:max-w-[700px] sm:mx-auto sm:bg-white">
    <h1 className="pb-[20px] ">Mari Coba Todo-List, Silakan Masukan list anda.</h1>
      <TodoInput />
      <TodoList />
      <TodoInfo />
    </div>
  );
}

export default Todo;
