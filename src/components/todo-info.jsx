import React, { useContext } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInfo() {
  const {todos} = useContext(TodoContext)

  return (
    <div className="mt-3">
      <div className="font-bold text-xs">{todos.length} Total Todo-List</div>
    </div>
  );
}

export default TodoInfo;
