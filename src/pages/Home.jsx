import React from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoLists } from "../components/TodoLists";

function Home() {
  return (
    <div>
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default Home;
