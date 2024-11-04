import Book from "./Book"

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books>"}</span>

      <div className="books-list">
        <Book
          title="I Survived to Tell"
          kind="holocaust memoir"
          language="english"
          date="october 2024"
          link="https://www.goodreads.com/author/list/22179373.Noach_Natan_elechower"
        />

        <Book
          title="Le Retour des Anges"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="october 2024"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/le-retour-des-anges-ebook.html"
        />

        <Book
          title="Regenesis: Feeding the World without Devouring the Planet"
          kind="Environment, science, food, sustainability"
          language="english"
          date="september 2024"
          link="https://www.monbiot.com/books/"
        />

        <Book
          title="Incidents in the Life of a Slave Girl"
          kind="Slave narrative"
          language="english"
          date="july 2024"
          link="https://en.wikipedia.org/wiki/Incidents_in_the_Life_of_a_Slave_Girl"
        />

        <Book
          title="Fulgrim"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="july 2024"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/fulgrim-ebook-french.html"
        />

        <Book
          title="Atlantis Beneath the Ice: The Fate of the Lost Continent "
          kind="Science & mythology"
          language="english"
          date="july 2024"
          link="https://www.goodreads.com/book/show/12665183-atlantis-beneath-the-ice"
        />

        <Book
          title="La Fuite de l'Eisenstein"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="june 2024"
          link="https://www.blacklibrary.com/all-products/fr-flight-of-the-eisenstein-ebook.html"
        />

        <Book
          title="Les Misérables"
          kind="French classic"
          language="french"
          date="may 2024"
          link="https://fr.wikipedia.org/wiki/Les_Mis%C3%A9rables"
        />

        <Book
          title="The Software Engineer's Guidebook"
          kind="Engineering"
          language="english"
          date="april 2024"
          link="https://www.engguidebook.com/?ref=blog.pragmaticengineer.com"
        />

        <Book
          title="Engineering Management For The Rest Of Us"
          kind="Engineering Management"
          language="english"
          date="march 2024"
          link="https://www.engmanagement.dev/"
        />

        <Book
          title="As Veias Abertas da América Latina"
          kind="Imperialism history"
          language="portuguese"
          date="march 2024"
          link="https://pt.wikipedia.org/wiki/As_Veias_Abertas_da_Am%C3%A9rica_Latina"
        />

        <Book
          title="80,000 hours"
          kind="Guide about career paths"
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
