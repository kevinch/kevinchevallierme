import Project from "./Project"
import Nav from "@/components/Nav"

function Projects() {
  return (
    <div>
      <Nav />

      <div className="projects-container container">
        <span className="code-help">{"<Projects>"}</span>

        <div className="projects-list">
          <Project name="Bolao.io" link="https://bolao.io">
            <p>A soccer betting app without money involved. Just for fun.</p>
            <p>
              Started with React, NodeJS, MongoDB & Heroku until May 2024 when I
              wrote the v3 with NextJS, Typescript, Postgres and Vercel.
            </p>
          </Project>

          <Project name="EMTalks.xyz" link="https://emtalks.xyz">
            <p>
              My Engineering Management related blog. NextJS, Nextra & Vercel.
            </p>
          </Project>

          <Project
            name="Spanish Verbs"
            link="https://vite-verbs-es.vercel.app/"
          >
            <p>
              A tiny webapp to input the infinive of a Spanish verb and receive
              its full conjugation. Super fast. Vite & Vercel.
            </p>
          </Project>

          <Project
            name="EM docs' repo"
            link="https://www.notion.so/Kevin-s-EM-documents-repository-9fe8ea54671b4d57a64f92e8cb34bcbd"
          >
            <p>
              A list of documents I use in my engineering management job.
              Written in english and portuguese. @Notion.
            </p>
          </Project>
        </div>

        <span className="code-help">{"</Projects>"}</span>
      </div>
    </div>
  )
}

export default Projects
