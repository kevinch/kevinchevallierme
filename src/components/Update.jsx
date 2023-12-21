function Update({ date, description }) {
  return (
    <div className="update-container">
      <p className="update-date">{date}</p>
      <p className="update-description">{description}</p>
    </div>
  );
}

export default Update;
