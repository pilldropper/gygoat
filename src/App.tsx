import "./App.css";

import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ControlPanel from "./components/ControlPanel";

function App() {

  return (
    <main>
      <Header/>
      <h1 className="text-2xl flex justify-center font-bold m-20">Download Now</h1>
      <InputBar />
      <ControlPanel />
    </main>
  );
}

export default App;
