function Book({ date, title, link }) {
  return (
    <div className="section-container"id="book-container">
      <p className="section-date">{date}</p>
      <p className="section-description">{link ? <a href={link}>{title}</a> : title}</p>
    </div>
  );
}

export default Book;
