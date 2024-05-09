import { createClient } from "@/prismicio"
import Link from "next/link"

import Nav from "@/components/Nav"
import { formatDateNews } from "../lib/utils"

async function News() {
  const client = createClient()
  const documents = await client.getAllByType("blog")

  console.log({ documents })

  return (
    <div>
      <Nav />

      <div>
        {documents.map((document) => {
          return (
            <div className="mb-6" key={document.uid}>
              <h2 className="text-2xl">
                <Link href={`/news/${document.uid}`}>
                  {document.data.title}
                </Link>
              </h2>
              <p className="text-sm mb-10 text-slate-500">
                {formatDateNews(document.first_publication_date)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News
