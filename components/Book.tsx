import { format } from "date-fns"
import Image from "next/image"

type Props = {
  date: string
  title: string
  link?: string
  language: string
  kind?: string
  cover?: string
}

function Book({ date, title, link, language, kind, cover }: Props) {
  const formatedDate = new Date(date)

  return (
    <div className="section-container">
      <div className="flex flex-row items-end">
        {cover && (
          <Image
            src={cover}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80px", height: "auto" }}
            className="mr-4 drop-shadow-md border-white border-4 rounded-sm hover:scale-150 transition ease-out"
          />
        )}
        <div>
          <p className="section-description">
            {/* {link ? <a href={link}>{title}</a> : title} */}
            {title}
          </p>
          <p style={{ color: "#666", fontSize: "1rem" }}>
            {format(formatedDate, "MMMM yyyy")}
            &nbsp;-&nbsp;{language}
            {kind && ` - ${kind}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Book
