import "./App.css";

import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ControlPanel from "./components/ControlPanel";

function App() {

  return (
    <main className="container">
      <Header />
      <h1>Download Now</h1>
      <InputBar />
      <ControlPanel />
    </main>
  );
}

export default App;
