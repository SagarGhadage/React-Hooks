import style from "../UseRef";
import SqrComp from "./SqrCopm";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
export default function UseCallbackHook() {
  const [val, setVal] = useState(1);
  const [st, setSt] = useState(true);
  const prevHandleClick = useRef();
  const handle = useCallback(() => {
    setVal(val + 1);
  }, [val]);
  const handleDec = useCallback(() => {
    setVal(val - 1);
  }, [val]);
  useEffect(() => {
    console.log(prevHandleClick.current === handle);
    prevHandleClick.current = handle;
  });
  return (
    <div className="App">

      <button
        onClick={() => {
          setSt(!st);
          console.log("state changed");
        }}
      >
        Change State of parent
      </button>

      <SqrComp
        ref={prevHandleClick}
        val={val}
        handle={handle}
        handleDec={handleDec}
      />
      
    </div>
  );
}
