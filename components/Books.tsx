import Book from "./Book"

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books>"}</span>

      <div className="books-list">
        <Book
          title="Les Misérables"
          pages={2598}
          language="french"
          date="may 2024"
          link="https://www.amazon.fr/Mis%C3%A9rables-Victor-Hugo-%C3%89dition-Int%C3%A9grale/dp/B0C9KTPQTS/ref=sr_1_8?crid=2BJOSZ0QLIY3G&dib=eyJ2IjoiMSJ9.rB49g7AvpQ_5c8FhjBirEyd6Klm6Ddb90YG0FNCKCXNWXDWPEVZUQn8zDw-gkXksWDl3q_Gi1RYI1a1VcpSs2sbMNLROdk5MBFciUn3IKDI7iIamFdS624kBrk-CCIoUwJGUVESjr2GQeL-MCMRSY5KD_Dv_a33e3APeuRIiqmR1MLngfPXaUJ7xnXSQqE2KH7CdU_B5vlO9sGdODhaAXSjdmrF5PSKNkXyhLDpYO7-LUpaEpxuAhnL_kA5HxLWRuy1_tZPzdY8E-5yuxpj1r-bVZT9u1nbpxAidRrkqfcE.TjepGqa1Su3Br-rY7PpJB3-78aEYo_J5cYJ2fQ7o-jc&dib_tag=se&keywords=les+miserables+victor+hugo&qid=1715686576&sprefix=les+miserables%2Caps%2C333&sr=8-8"
        />

        <Book
          title="The Software Engineer's Guidebook"
          language="english"
          date="april 2024"
          link="https://www.engguidebook.com/?ref=blog.pragmaticengineer.com"
        />

        <Book
          title="Engineering Management For The Rest Of Us"
          language="english"
          date="march 2024"
          link="https://www.engmanagement.dev/"
        />

        <Book
          title="Open Veins of Latin America"
          language="portuguese"
          date="march 2024"
          link="https://pt.wikipedia.org/wiki/As_Veias_Abertas_da_Am%C3%A9rica_Latina"
        />

        <Book
          title="80,000 hours"
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
