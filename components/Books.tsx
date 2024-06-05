import Book from "./Book"

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books>"}</span>

      <div className="books-list">
        <Book
          title="La Fuite de l'Eisenstein "
          kind="Fantasy, Warhammer 40k"
          pages={350}
          language="french"
          date="june 2024"
          link="https://www.blacklibrary.com/all-products/fr-flight-of-the-eisenstein-ebook.html"
        />

        <Book
          title="Les Misérables"
          kind="French classic"
          pages={2598}
          language="french"
          date="may 2024"
          link="https://fr.wikipedia.org/wiki/Les_Mis%C3%A9rables"
        />

        <Book
          title="The Software Engineer's Guidebook"
          kind="Engineering"
          pages={415}
          language="english"
          date="april 2024"
          link="https://www.engguidebook.com/?ref=blog.pragmaticengineer.com"
        />

        <Book
          title="Engineering Management For The Rest Of Us"
          kind="Engineering Management"
          pages={260}
          language="english"
          date="march 2024"
          link="https://www.engmanagement.dev/"
        />

        <Book
          title="As Veias Abertas da América Latina"
          kind="Imperialism history"
          pages={392}
          language="portuguese"
          date="march 2024"
          link="https://pt.wikipedia.org/wiki/As_Veias_Abertas_da_Am%C3%A9rica_Latina"
        />

        <Book
          title="80,000 hours"
          kind="Guide about career paths"
          pages={603}
          language="english"
          date="january 2024"
          link="https://80000hours.org/wp-content/uploads/2023/08/80K_HOURS_final.pdf"
        />
      </div>

      <span className="code-help">{"</Books>"}</span>
    </div>
  )
}

export default Books
