import React from "react";
import "./LoginInput.scss";

export default function Input({ type, value, setValue, logo }) {
  return (
    <div id="input_container">
      <img src={logo}/>
      <input
        className="login_input"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
