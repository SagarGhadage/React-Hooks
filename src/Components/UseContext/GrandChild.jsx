import React, {
  useContext,
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { CountContext } from "./CountContext";
export default function GrandChild() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <h1>GC_Count{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
    </>
  );
}
