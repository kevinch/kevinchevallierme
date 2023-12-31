import Books from "./components/Books.jsx";
import Projects from "./components/Projects.jsx";
import Updates from "./components/Updates.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="intro-container container">
        <span className="code-help">{"<Intro>"}</span>
        <div className="intro-text">
          Hi, hola, oi, salut.
          <br />
          <br />
          Kevin here, french frontend developer turned engineering manager and
          living in Brazil.
          <br />
          <br />I currently manage a team of developers, front, back and native
          at Mercado Livre that work on one of the biggest fintech apps in Latin
          America, Mercado Pago. More about my career path at{" "}
          <a href="https://www.linkedin.com/in/kevinchevallier/">LinkedIn</a>.
          <br />
          <br />
          Here you will find links to several projects I work on or have
          developed and some frontend experiments. 
        </div>
        <span className="code-help">{"</Intro>"}</span>
      </div>

      <Projects />

      <Books />

      <Updates />
    </div>
  );
}

export default App;
