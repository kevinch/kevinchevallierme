import { format } from "date-fns"

type Props = {
  date: string
  title: string
  link?: string
  language: string
  pages?: number
  kind?: string
}

function Book({ date, title, link, language, pages, kind }: Props) {
  const formatedDate = new Date(date)

  return (
    <div className="section-container">
      <p className="section-description">
        {link ? <a href={link}>{title}</a> : title}
      </p>
      <p style={{ color: "#666", fontSize: "1rem" }}>
        {format(formatedDate, "MMMM yyyy")}
        &nbsp;-&nbsp;{language}
        {pages && ` - ${pages} pages`}
        {kind && ` - ${kind}`}
      </p>
    </div>
  )
}

export default Book
