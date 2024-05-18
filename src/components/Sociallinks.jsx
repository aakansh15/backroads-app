import { social } from "./data";

const Sociallinks = () => {
  return (
    <>
      {social.map((icon, index) => {
        return (
          <li key={index}>
            <a href={`https://www.${icon}.com`} className="footer-icon">
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </>
  );
};
export default Sociallinks;
