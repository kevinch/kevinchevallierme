import { createClient } from "@/prismicio"
import { PrismicRichText } from "@prismicio/react"
import { formatDateNews } from "@/app/lib/utils"
import Nav from "@/components/Nav"

async function NewsPost({ params }: any) {
  const client = createClient()
  const document = await client.getByUID("blog", params.uid)

  console.log({ document })

  return (
    <div>
      <Nav />

      <h2 className="text-2xl">{document.data.title}</h2>
      <p className="text-sm mb-10 text-slate-500">
        {formatDateNews(document.first_publication_date)}
      </p>

      <PrismicRichText field={document.data.content} />
    </div>
  )
}

export default NewsPost
