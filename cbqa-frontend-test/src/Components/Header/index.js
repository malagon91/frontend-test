import React from "react";
import "./styles.css";
const Header = ({ selected }) => {
  const { index, userId, items } = selected;
  const addClassName = () => {
    return index == 0 ? "fas fa-chevron-left left" : null;
  };
  return (
    <div className="header">
      <i className={"fas fa-chevron-left left"} onClick={() => {}}></i>
      <div className="center">
        <p>{userId}</p>
        <p className="date">{`Total Childs ${items ? items.length : 0}`}</p>
      </div>
      <i className={"fas fa-chevron-right right"} onClick={() => {}}></i>
    </div>
  );
};

export default Header;
