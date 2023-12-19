import "./Project.css";

function Project({ name, link, description }) {
  return (
    <div className="project-container">
      <div className="project-title" style={{marginBottom: '0'}}>
        <a style={{ textDecoration: "underline" }} href={link}>
          {name}
        </a>
      </div>
      <p style={{margin: 0}} className="project-description">{description}</p>
    </div>
  );
}

export default Project;
