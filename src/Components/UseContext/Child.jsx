import React, {
  useContext,
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import GrandChild from "./GrandChild";
export default function Child() {
  return <GrandChild />;
}
