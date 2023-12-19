import Project from "./components/Project.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="intro" style={{ marginBottom: "4rem" }}>
        <span className="code-help">{"<Intro>"}</span>
        <div style={{ paddingLeft: "4%" }}>
          Hi, hola, oi, salut.
          <br />
          <br />
          Kevin here, french frontend developer turned engineering manager and
          living in Brazil. Yes, I speak (almost) 4 languages, my spanish is in
          progress since 2022.
          <br />
          <br />I currently manage a team of developers, front, back and native
          at Mercado Livre that work on one of the biggest fintech apps in Latin
          America, Mercado Pago. More about my career path at{" "}
          <a href="https://www.linkedin.com/in/kevinchevallier/">LinkedIn</a>.
          <br />
          <br />
          Here you will find links to several projects I work on or have
          developed.
        </div>
        <span className="code-help">{"</Intro>"}</span>
      </div>

      <span className="code-help">{"<Projects>"}</span>
      <div>
      <Project
        description="A soccer betting app without money involved. Just for fun. React, NodeJS, MongoDB & Heroku."
        name="Bolao.io"
        link="https://bolao.io"
      />

      <Project
        description="My Engineering Management related blog. NextJS, Nextra & Vercel."
        name="EMTalks.xyz"
        link="https://emtalks.xyz"
      />

      <Project
        description="A tiny webapp to input the infinive of a Spanish verb and receive its full conjugation. Super fast. Vite & Vercel."
        name="Spanish Verbs"
        link="https://vite-verbs-es.vercel.app/"
      />

      <Project
        description="A list of documents I use in my engineering management job. Written in english and portuguese. @Notion."
        name="EM docs' repo"
        link="https://www.notion.so/Kevin-s-EM-documents-repository-9fe8ea54671b4d57a64f92e8cb34bcbd"
      /></div>
      <span className="code-help">{"</Projects>"}</span>
    </div>
  );
}

export default App;
