function Project({ name, link, description }) {
  return (
    <div className="project-container">
      <div className="project-title">
        <a style={{ textDecoration: "underline" }} href={link}>
          {name}
        </a>
      </div>
      <p className="project-description">
        {description}
      </p>
    </div>
  );
}

export default Project;
