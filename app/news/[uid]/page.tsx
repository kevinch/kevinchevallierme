import { createClient } from "@/prismicio"
import { PrismicRichText } from "@prismicio/react"
import { formatDateNews } from "@/app/lib/utils"
import Nav from "@/components/Nav"

async function NewsPost({ params }: any) {
  const client = createClient()
  const document = await client.getByUID("blog", params.uid)

  return (
    <div>
      <Nav />

      <div className="news-container container">
        <h1 style={{ marginBottom: "0" }}>{document.data.title}</h1>

        <p
          className="text-sm mb-10 text-slate-500"
          style={{ color: "#666", fontSize: "1rem", marginBottom: "10%" }}
        >
          Published:&nbsp;
          {formatDateNews(document.first_publication_date)}
          &nbsp;-&nbsp;Last edited:&nbsp;
          {formatDateNews(document.last_publication_date)}
        </p>

        <PrismicRichText field={document.data.content} />
      </div>
    </div>
  )
}

export default NewsPost
