import "./App.css";

import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ControlPanel from "./components/ControlPanel";

import { Input } from "@/components/ui/8bit/input";
import { Card } from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";

function App() {

  return (
    <main>
      <Header/>
      <h1 className="text-2xl flex justify-center font-bold m-20">Download Now</h1>
      <InputBar />
      <ControlPanel />

      <Input placeholder="Enter text..." font="retro" />
      <Card>
        <p>This is a card component.</p>
      </Card>
      <Button>Click Me</Button>

    </main>
  );
}

export default App;
