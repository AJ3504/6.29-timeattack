import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/modules/comments";
import { useParams } from "react-router-dom";

const AddComment = () => {
  //
  const [commenterName, setCommenterName] = useState("");
  const [commentBody, setCommentBody] = useState("");

  //
  const dispatch = useDispatch();

  //
  const { id } = useParams();
  console.log("id =>", id);

  //
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //
    dispatch(
      addComment({
        commenterName,
        commentBody,
        id: id,
      })
    );

    setCommenterName("");
    setCommentBody("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        이름:{" "}
        <input
          value={commenterName}
          onChange={(e) => {
            setCommenterName(e.target.value);
          }}
        />
        내용 :{" "}
        <input
          value={commentBody}
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
        />
        <button>댓글 등록하기</button>
        <button>댓글 삭제하기</button>
      </form>
    </>
  );
};

export default AddComment;
