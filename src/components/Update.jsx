function Update({ date, description }) {
  return (
    <div className="section-container" id="update-container">
      <p className="section-date">{date}</p>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default Update;
