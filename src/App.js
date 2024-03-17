import logo from './logo.svg';
import './App.css';
import UseRefHook from './Components/UseRef';
import UseMemoHook from './Components/UseMemoHook';
import UseCallbackHook from './Components/UseCallback/UseCallback';
import ParentCopmonent from './Components/UseContext/Parent';
import CustomHooks from './Components/CostomHooks';

function App() {
  return (
    <div className="App">
      <UseRefHook></UseRefHook>
      <UseMemoHook/>
      <UseCallbackHook/>
      <ParentCopmonent/>
      <CustomHooks/>
    </div>
  );
}

export default App;
