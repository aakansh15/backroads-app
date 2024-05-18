import Title from "./Title";
import { services } from "./data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title black="Our" blue="Services" />
      <div className="section-center services-center">
        {services.map((article) => {
          let { id, icon, heading, text } = article;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={`fas fa-${icon} fa-fw`}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{heading}</h4>
                <p className="service-text">
                  {text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
