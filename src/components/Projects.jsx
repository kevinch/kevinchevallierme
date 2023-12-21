import Project from "./Project.jsx";

import "./Project.css";

function Projects() {
  return (
    <div className="projects-container container">
      <span className="code-help">{"<Projects>"}</span>

      <div className="projects-list">
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
        />
      </div>

      <span className="code-help">{"</Projects>"}</span>
    </div>
  );
}

export default Projects;
