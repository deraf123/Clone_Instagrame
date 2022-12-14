import React, { useState } from "react";
import "./style.scss";
import { nanoid } from "nanoid";
import cn from "classnames";
import { UserBadge } from "../UserBadge";
import { Comment } from "../Comment";

export const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
  className,
}) => {
  const [isCommentsShow, setIsCommentsShow] = useState(false);
  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShow) {
      const commentsForRender = [...comments];
      commentsForRender.splice(comments.length - 2, 2);
      return (
        <>
          <span
            className='cnDetailedCardCommentTitle'
            onClick={() => setIsCommentsShow(true)}
          >{`Показать еще ${
            comments.length - commentsForRender.length
          } коммкнтариев`}</span>
          {commentsForRender?.map((comment, index) => (
            <Comment key={nanoid()} {...comment} />
          ))}
        </>
      );
    }
    return comments?.map((comment) => (
      <Comment {...comment} key={comment.text} />
    ));
  };
  return (
    <div className={cn("cnDetailedCardRoot", className)}>
      <div className='cnDetailedCardHeader'>
        <UserBadge nickname={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt='img' className='cnDetailedCardImg' />
      </div>
      <div className='cnDetailedCardButtons'>
        <i
          className={`${
            isLikedByYou ? "fas" : "far"
          } fa-heart cnDetailedCardLikeIcon`}
        />
        <i className='fas fa-comment cnDetailedCardLikeComment' />
      </div>
      <div className='cnDetailedCardLikes'>{`Оценили ${likes} человек`}</div>
      <div className='cnDetailedCardComments'>{renderComments()}</div>
      <textarea
        name=''
        id=''
        cols='30'
        rows='10'
        className='cnDetailedCardTextArea'
      ></textarea>
    </div>
  );
};
