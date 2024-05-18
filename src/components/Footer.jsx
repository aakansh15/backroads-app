import Sociallinks from "./Sociallinks";
import Pagelinks from "./Pagelinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <Pagelinks />
      </ul>
      <ul className="footer-icons">
        <Sociallinks />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
