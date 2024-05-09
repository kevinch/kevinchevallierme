import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import Books from "@/components/Books"
import Updates from "@/components/Updates"
// import Link from "next/link"

function Home() {
  return (
    <>
      {/* <Link href={"/news"}>News</Link> */}

      <Intro />
      <Projects />
      <Books />
      <Updates />
    </>
  )
}

export default Home
