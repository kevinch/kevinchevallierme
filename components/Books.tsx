import Book from "./Book"

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books>"}</span>

      <div className="books-list">
        <Book
          title="The Software Engineer's Guidebook"
          date="april 2024"
          link="https://www.engguidebook.com/?ref=blog.pragmaticengineer.com"
        />

        <Book
          title="Engineering Management For The Rest Of Us"
          date="march 2024"
          link="https://www.engmanagement.dev/"
        />

        <Book
          title="Open Veins of Latin America"
          date="march 2024"
          link="https://en.wikipedia.org/wiki/Open_Veins_of_Latin_America"
        />

        <Book
          title="80,000 hours"
          date="january 2024"
          link="https://80000hours.org/wp-content/uploads/2023/08/80K_HOURS_final.pdf"
        />
      </div>

      <span className="code-help">{"</Books>"}</span>
    </div>
  )
}

export default Books
