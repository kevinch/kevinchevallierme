import Update from "./Update.jsx";

function Updates() {
  return (
    <div className="updates-container container">
      <span className="code-help">{"<Updates>"}</span>

      <div className="updates-list">
        <Update description="Updated jsx to tsx." date="jan 11, 2024" />

        <Update
          description="Adding Books section. Things I read that might be of interest for others. From 2024 onwards."
          date="jan 9, 2024"
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
