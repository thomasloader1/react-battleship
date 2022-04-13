import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsernameAction } from "../store/actions/namePlayerAction";

function UsernameHook() {
  // const username = useSelector((state) => state.namePlayerReducer);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="userNameContainer">
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="Enter your name"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <input
        type="button"
        className="btn-start"
        value="Start Game"
        onClick={() => {
          dispatch(setUsernameAction(input));
        }}
      />
    </div>
  );
}

export default UsernameHook;
