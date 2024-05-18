import Title from "./Title";
import { toursData } from "./data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title black="Featured" blue="tours" />
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          const { id, img, title, date, country, days, price, paragraph } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {paragraph}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{`${days} days`}</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
