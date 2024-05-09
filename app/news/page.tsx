// import { createClient } from "@/prismicio"
// import { PrismicRichText } from "@prismicio/react"
// import PageTitle from "../components/pageTitle"
// import { formatDateNews } from "../lib/utils"
import Link from "next/link"

async function News() {
  // const client = createClient()
  // const documents = await client.getAllByType("news")

  // console.log(documents[0].data)

  return (
    <div>
      <h1>News</h1>
      {/* <PageTitle center={true}>News</PageTitle> */}
      <Link href={"/"}>Home</Link>
    </div>
  )
}

export default News
