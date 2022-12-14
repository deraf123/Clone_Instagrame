import "./style.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

export const UserBadge = ({ nickName, avatarUrl, id }) => {
  const navigate = useNavigate();

  const userBadgeClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className='cnUserBadgeRoot' onClick={userBadgeClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt='logo' className='cnUserBadgeAvatar' />
      ) : (
        <div className='cnUserBadgePlaceholder' />
      )}
      <span className='cnUserBadgeName'>{nickName}</span>
    </div>
  );
};
