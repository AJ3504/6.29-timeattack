import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";

export const AddTodo = () => {
  //
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //
  const todos = useSelector((state) => state.todos);

  //
  const dispatch = useDispatch();

  //
  const onSubmitHandler = (e) => {
    //
    if (!title || !content) {
      alert("필수값이 누락되었습니다. 확인해주세요!");
      return false; //밑의 로직으로 내려가지 않기 위해
    }

    //
    e.preventDefault();

    //이런 형태의 action객체를
    // dispatch(
    //   {
    //     type: "ADD_TODO",
    //     payload: {
    //       id: shortid.generate(),
    //       title,
    //       content,
    //       isDone: false,
    //     }
    //   }
    // )
    dispatch(
      addTodo({
        id: shortid.generate(),
        title,
        content,
        isDone: false,
      })
    );

    //
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};
