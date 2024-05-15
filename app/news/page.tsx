import { createClient } from "@/prismicio"
import Link from "next/link"

import Nav from "@/components/Nav"
import { formatDateNews } from "../lib/utils"

async function News() {
  const client = createClient()
  const documents = await client.getAllByType("blog")

  return (
    <div>
      <Nav />

      <div className="news-container container">
        <span className="code-help">{"<News>"}</span>

        <div className="news-list">
          {documents.map((document) => (
            <div className="mb-6 section-container" key={document.uid}>
              <h2 className="text-2xl">
                <Link href={`/news/${document.uid}`}>
                  {document.data.title}
                </Link>
              </h2>
              <p
                className="text-sm mb-10 text-slate-500"
                style={{ color: "#666", fontSize: "1rem" }}
              >
                {formatDateNews(document.first_publication_date)}
              </p>
            </div>
          ))}
        </div>

        <span className="code-help">{"</News>"}</span>
      </div>
    </div>
  )
}

export default News
