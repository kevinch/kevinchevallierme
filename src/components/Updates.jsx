import Update from "./Update.jsx";

function Updates() {
  return (
    <div className="updates-container container">
      <span className="code-help">{"<Updates>"}</span>

      <div className="updates-list">
      <Update
          description="Adding Books section. Things I read that might be of interest for others."
          date="jan 29, 2024"
        />

        <Update
          description="Adding updates and analytics with Umami."
          date="dec 20, 2023"
        />

        <Update
          description="1st commit. Vite & Vercel ftw ✌️"
          date="dec 19, 2023"
        />
      </div>

      <span className="code-help">{"</Updates>"}</span>
    </div>
  );
}

export default Updates;
