function Project({ name, link, description }) {
  return (
    <div style={{marginBottom: '9%'}}>
      <div className="project-title" style={{marginBottom: '0'}}>
        <a style={{ textDecoration: "underline" }} href={link}>
          {name}
        </a>
      </div>
      <p style={{marginTop: 0}} className="project-description">{description}</p>
    </div>
  );
}

export default Project;
