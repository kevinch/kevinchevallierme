type Props = {
  name: string
  children: React.ReactNode
  link: string
}

function Project({ name, link, children }: Props) {
  return (
    <div className="section-container" id="project-container">
      <div className="project-title">
        <a href={link}>{name}</a>
      </div>
      <div className="section-description">{children}</div>
    </div>
  )
}

export default Project
