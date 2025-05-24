import Book from "./Book"

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books_2025>"}</span>

      <div className="books-list">
        <Book
          title="Contos Inacabados"
          kind="fantasy"
          language="portuguese"
          date="may 2025"
          cover="/images/contos-inacabados.jpg"
        />
        <Book
          title="Vingt Mille Lieues sous les mers"
          kind="Classic"
          language="french"
          date="may 2025"
          cover="/images/vingt-mille-lieues-sous-mers.jpg"
        />

        <Book
          title="Le Horla"
          kind="Classic"
          language="french"
          date="march 2025"
          cover="/images/le-horla.jpg"
        />

        <Book
          title="Le dieu blanc est mort à Diên Biên Phu"
          kind="History"
          language="french"
          date="march 2025"
          cover="/images/le-dieu-blanc.jpg"
        />

        <Book
          title="Le Colonel Chabert"
          kind="Classic"
          language="french"
          date="february 2025"
          link="https://www.goodreads.com/book/show/159434.Le_Colonel_Chabert"
          cover="/images/le-colonel-chabert.jpg"
        />

        <Book
          title="K2: The Story of the Savage Mountain"
          kind="Mountaineering"
          language="english"
          date="february 2025"
          link="https://www.goodreads.com/book/show/112041.K2"
          cover="/images/k2-the-savage-mountain.jpg"
        />

        <Book
          title="Mechanicum"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="january 2025"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/mechanicum-fre.html"
          cover="/images/mechanicum.jpg"
        />

        <Book
          title="My Life as an Explorer"
          kind="Adventure, travel"
          language="english"
          date="january 2025"
          link="https://www.goodreads.com/book/show/4799293-my-life-as-an-explorer"
          cover="/images/my-life-an-an-explorer.jpg"
        />
      </div>

      <span className="code-help">{"</Books_2025>"}</span>

      <div className="spacer" style={{ padding: "2rem 0" }} />

      <span className="code-help">{"<Books_2024>"}</span>

      <div className="books-list">
        <Book
          title="A Time to Die: The Untold Story of the Kursk Tragedy"
          kind="Military history"
          language="english"
          date="december 2024"
          link="https://www.goodreads.com/book/show/452207.A_Time_to_Die"
          cover="/images/a-time-to-die.jpg"
        />

        <Book
          title="Légion"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="december 2024"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/legion-ebook-fr.html"
          cover="/images/legion.jpg"
        />

        <Book
          title="The Hundred Years' War on Palestine"
          kind="History"
          language="english"
          date="november 2024"
          link="https://en.wikipedia.org/wiki/The_Hundred_Years%27_War_on_Palestine"
          cover="/images/the-hundred-years-war-on-palestine.jpg"
        />

        <Book
          title="Chernobyl 01:23:40"
          kind="History"
          language="english"
          date="november 2024"
          link="https://www.amazon.com.br/Chernobyl-01-23-Andrew-Leatherbarrow/dp/8525438855"
          cover="/images/chernobyl-01-23-40.jpg"
        />

        <Book
          title="I Survived to Tell"
          kind="Holocaust memoir"
          language="english"
          date="october 2024"
          link="https://www.goodreads.com/book/show/60215066-i-survived-to-tell"
          cover="/images/i-survived-to-tell.jpg"
        />

        <Book
          title="Le Retour des Anges"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="october 2024"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/le-retour-des-anges-ebook.html"
          cover="/images/le-retour-des-anges.jpg"
        />

        <Book
          title="Regenesis: Feeding the World without Devouring the Planet"
          kind="Environment, science, food, sustainability"
          language="english"
          date="september 2024"
          link="https://www.monbiot.com/books/"
          cover="/images/regenesis.jpg"
        />

        <Book
          title="Incidents in the Life of a Slave Girl"
          kind="Slave narrative"
          language="english"
          date="july 2024"
          link="https://en.wikipedia.org/wiki/Incidents_in_the_Life_of_a_Slave_Girl"
          cover="/images/incidents-in-the-life-of-a-slave-girl.jpg"
        />

        <Book
          title="Fulgrim"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="july 2024"
          link="https://www.blacklibrary.com/french/the-horus-heresy-novels/fulgrim-ebook-french.html"
          cover="/images/fulgrim.jpg"
        />

        <Book
          title="Atlantis Beneath the Ice: The Fate of the Lost Continent "
          kind="Science & mythology"
          language="english"
          date="july 2024"
          link="https://www.goodreads.com/book/show/12665183-atlantis-beneath-the-ice"
          cover="/images/atlantis-beneath-the-ice.jpg"
        />

        <Book
          title="La Fuite de l'Eisenstein"
          kind="Fantasy, Warhammer 40k"
          language="french"
          date="june 2024"
          link="https://www.blacklibrary.com/all-products/fr-flight-of-the-eisenstein-ebook.html"
          cover="/images/le-fuite-de-l-einsenstein.jpg"
        />

        <Book
          title="Les Misérables"
          kind="Epic novel"
          language="french"
          date="may 2024"
          link="https://fr.wikipedia.org/wiki/Les_Mis%C3%A9rables"
          cover="/images/les-miserables.jpg"
        />

        <Book
          title="The Software Engineer's Guidebook"
          kind="Software engineering"
          language="english"
          date="april 2024"
          link="https://www.engguidebook.com/?ref=blog.pragmaticengineer.com"
          cover="/images/the-software-engineers-guidebook.jpg"
        />

        <Book
          title="Engineering Management For The Rest Of Us"
          kind="Engineering Management"
          language="english"
          date="march 2024"
          link="https://www.engmanagement.dev/"
          cover="/images/engineering-management-for-the-rest-of-us.jpg"
        />

        <Book
          title="As Veias Abertas da América Latina"
          kind="Imperialism history"
          language="portuguese"
          date="march 2024"
          link="https://pt.wikipedia.org/wiki/As_Veias_Abertas_da_Am%C3%A9rica_Latina"
          cover="/images/as-veias-abertas-da-america-latina.jpg"
        />

        <Book
          title="80,000 hours"
          kind="Guide about career paths"
          language="english"
          date="january 2024"
          link="https://80000hours.org/wp-content/uploads/2023/08/80K_HOURS_final.pdf"
          cover="/images/80000-hours.jpg"
        />
      </div>

      <span className="code-help">{"</Books_2024>"}</span>
    </div>
  )
}

export default Books
