import React from "react";

function UserName() {
  return (
    <div className="userNameContainer">
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter your name"
      />
      <input type="submit" className="btn-start" value="Start Game" />
    </div>
  );
}

export default UserName;
