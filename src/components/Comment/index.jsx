import React from "react";
import "./style.scss";
export const Comment = ({ nickName, text }) => {
  return (
    <div className='cnCommentRoot'>
      <span className='cnCommentName'>{nickName} : </span>
      <span> {text}</span>
    </div>
  );
};
