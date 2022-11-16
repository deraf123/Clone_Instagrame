import React from "react";
import { Navbar } from "../Navbar";
import "./style.scss";
export const Layout = ({ nickName, avatarUrl, id, children }) => {
  return (
    <div className='cnLayoutRoot'>
      <div>
        <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
      <div className='cnLayoutBody'>{children}</div>
    </div>
  );
};
