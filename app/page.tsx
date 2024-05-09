import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import Books from "@/components/Books"
import Updates from "@/components/Updates"
import Nav from "@/components/Nav"

function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Projects />
      <Books />
      <Updates />
    </>
  )
}

export default Home
