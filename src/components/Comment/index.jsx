import React from "react";
import "./style.scss";
export const Comment = ({ nickname, text }) => {
  return (
    <div className='cnCommentRoot'>
      <span className='cnCommentName'>{nickname} : </span>
      <span> {text}</span>
    </div>
  );
};
