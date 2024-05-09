type Props = {
  date: string;
  description: string;
};

function Update({ date, description }: Props) {
  return (
    <div className="section-container" id="update-container">
      <p className="section-date">{date}</p>
      <p className="section-description">{description}</p>
    </div>
  );
}

export default Update;
