import logo from "../images/logo.svg";
import { pageLinks, social } from "./data";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* left this comment on purpose */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link, index) => {
            return (
              <li key={index}>
                {" "}
                <a href={`#${link}`} className="nav-link">
                  {link}
                </a>{" "}
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {social.map((icon, index) => {
            return (
              <li key={index}>
                {" "}
                <a
                  href={`https://www.${icon}.com`}
                  rel="noreferrer"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
