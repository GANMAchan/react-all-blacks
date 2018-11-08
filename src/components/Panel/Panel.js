import React, { Component } from 'react';
import './Panel.css';

//isBlackとhandleClick関数を呼び出す
const Panel = ({isBlack,handleClick}) => {
  return(
    <button
      //propsで渡されたisBlackがtrueならbg-black,falseならbg-whiteをクラスに加える
      className={`panel ${isBlack ? "bg-black":"bg-white"}`}
      onClick={handleClick}
    />
  );
}

export default Panel;
