import React from "react";

function Header({ count }) {
  const bN = new Date();
  const dateD = bN.getDate();
  const dateM = bN.getMonth();
  const dateF = bN.getFullYear();

  const fullDate = `${dateD}/${dateM}/${dateF}`;

  return (
    <div className="header">
      <h1>Crud App with Reactjs</h1>
      <p>Date: {fullDate}</p>
      {count > 0 && <p>Task(s):{count} </p>}
    </div>
  );
}

export default Header;
