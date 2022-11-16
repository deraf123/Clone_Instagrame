import "./style.scss";

import React from "react";
import { UserBadge } from "../UserBadge";

export const Navbar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className='cnNavbarRoot'>
      <div className='cnNavbarWrapper'>
        <span>InstaClone</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};
