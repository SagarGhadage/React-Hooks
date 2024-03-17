import React from "react";
import styles from './UseRef.module.css'
import { useRef, useState } from "react";

export default function UseRefHook() {
  const focus = useRef();
  const handleClick = () => {
    focus.current.focus();
  };
  return (
    <div className="App">
      <input ref={focus} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
