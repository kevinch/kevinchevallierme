// import Link from "next/link"
import Link from "next/link"

function Home() {
  return (
    <main>
      <h1>Hi, hola, oi, salut.</h1>
      <Link href={"/news"}>News</Link>
      {/* <PageTitle>Simple soccer bets.</PageTitle>
      z

      <div className="flex items-center flex-col space-y-8 uppercase">
        <Link className="underline hover:no-underline" href="/sign-in">
          Sign-in
        </Link>
        <Link className="underline hover:no-underline" href="/sign-up">
          Sign-up
        </Link>
      </div> */}
    </main>
  )
}

export default Home
