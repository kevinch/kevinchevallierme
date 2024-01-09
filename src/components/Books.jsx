import Book from "./Book.jsx";

function Books() {
  return (
    <div className="books-container container">
      <span className="code-help">{"<Books>"}</span>

      <div className="books-list">
        <Book
          title="80,000 hours"
          date="jan 8, 2024"
          link="https://80000hours.org/wp-content/uploads/2023/08/80K_HOURS_final.pdf"
        />
      </div>

      <span className="code-help">{"</Books>"}</span>
    </div>
  );
}

export default Books;
