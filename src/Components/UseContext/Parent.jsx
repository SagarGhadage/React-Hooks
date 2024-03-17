import Child from "./Child";
import React, {
  useContext,
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { CountContext } from "./CountContext";
// import ParentCopmonent from "./ParentCopmonent";
export default function ParentCopmonent() {
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <CountContext.Provider value={{ count, setCount }}>
        <Child />
      </CountContext.Provider>
    </div>
  );
}
