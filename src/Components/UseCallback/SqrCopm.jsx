import React, { useMemo } from "react";
function SqrComp({ val, handle, handleDec }) {
  console.log("sqr rr");
  const sqr = (num) => {
    console.log("sqr" + num);
    return num * num;
  };
  const sqrValue = useMemo(() => sqr(val), [val]);
  return (
    <div className="App">
      <h1>Sqr {val}</h1>
      <h2>{sqrValue}</h2>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handle}>Increment</button>
    </div>
  );
}
export default React.memo(SqrComp);
