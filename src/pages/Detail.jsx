import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import CommentList from "../components/CommentList";

function Detail() {
  //
  const { id } = useParams();
  console.log("넘겨받은 id", id);

  //이전 화면으로
  const navigate = useNavigate();

  //
  const todos = useSelector((state) => state.todos);

  //
  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.content}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>

      <hr />
      {/*  */}
      <AddComment />
      <CommentList />
    </div>
  );
}

export default Detail;
