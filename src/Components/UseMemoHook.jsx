import style from "./UseRef.module.css";
import { useState, useMemo, useRef } from "react";
export default function UseMemoHook() {
  const [val, setVal] = useState(1);
  const [st, setSt] = useState(true);
  const handle = () => {
    setVal(val + 1);
  };
  const handleDec = () => {
    setVal(val - 1);
  };
  return (
    <>
      <SqrComp val={val} />
      <button onClick={handle}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button
        onClick={() => {
          setSt(!st);
          console.log("rr");
        }}
      >
        stt
      </button>
    </>
  );
}
function SqrComp({ val }) {
  const sqr = (num) => {
    console.log("sqr" + num);
    return num * num;
  };
  const sqrValue = useMemo(() => sqr(val), [val]);
  return (
    <div className="App">
      <h1>Sqr {val}</h1>
      <h2>{sqrValue}</h2>
    </div>
  );
}
