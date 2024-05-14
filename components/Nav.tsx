import Link from "next/link"

const styleObkj = { marginLeft: "10px", fontSize: "70%" }

function Nav() {
  return (
    <nav style={{ textAlign: "right", marginBottom: "10%" }}>
      <Link style={styleObkj} href={"/"}>
        Home
      </Link>
      <Link style={styleObkj} href={"/news"}>
        News
      </Link>
      <Link style={styleObkj} href={"/books"}>
        Books
      </Link>
    </nav>
  )
}

export default Nav
