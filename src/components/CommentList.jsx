import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CommentList() {
  //
  const { id } = useParams();
  console.log("id3 =>", id);

  //
  const comments = useSelector((state) => state.comments);
  console.log("state.comments의 값", comments);

  //
  const filteredComments = comments.filter((comment) => {
    return comment.id === id;
  });
  console.log("필터", filteredComments);

  return filteredComments.map((comment) => {
    return (
      <div key={comment?.id}>
        <p>이름: {comment.commenterName}</p>
        <p>내용: {comment.commentBody}</p>
        <button>수정</button>
        <button>삭제</button>
      </div>
    );
  });
}

export default CommentList;
