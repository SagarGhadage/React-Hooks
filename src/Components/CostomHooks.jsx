import useWindowSize from "../CustomHooks/useWindowSize";

export default function CustomHooks() {
  const windowSize = useWindowSize()
//   console.clear()
  console.log(windowSize)
  return (
    <div className="App">
      <h1>window width:{windowSize.width}px</h1>
      <h1>window heigth:{windowSize.height}px</h1>
    </div>
  );
}
