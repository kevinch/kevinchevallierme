type Props = {
  name: string;
  description: string;
  link: string;
};

function Project({ name, link, description }: Props) {
  return (
    <div className="section-container" id="project-container">
      <div className="project-title">
        <a href={link}>{name}</a>
      </div>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default Project;
