const Tour = ({ image, date, title, info, location, link }) => {
  return (
    // 将整个卡片包裹在 <a> 标签中
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="tour-link"
    >
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt={title} />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className="fas fa-link"></i>
              </span>
              {location}
            </p>
          </div>
        </div>
      </article>
    </a>
  );
};
export default Tour;
