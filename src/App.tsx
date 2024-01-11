import Intro from "./components/Intro";
import Books from "./components/Books";
import Projects from "./components/Projects";
import Updates from "./components/Updates";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Intro />
      <Projects />
      <Books />
      <Updates />
    </div>
  );
}

export default App;
