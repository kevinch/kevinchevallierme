import Update from "./Update.jsx";

import "./Updates.css";

function Updates() {
  return (
    <div className="updates-container container">
      <span className="code-help">{"<Updates>"}</span>

      <div className="updates-list">
      <Update
          description="Adding updates."
          date="21/12/2023"
        />
        
        <Update
          description="1st commit."
          date="19/12/2023"
        />
      </div>

      <span className="code-help">{"</Updates>"}</span>
    </div>
  );
}

export default Updates;
