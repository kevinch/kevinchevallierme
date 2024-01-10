import Intro from "./components/Intro.jsx";
import Books from "./components/Books.jsx";
import Projects from "./components/Projects.jsx";
import Updates from "./components/Updates.jsx";

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
