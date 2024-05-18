import { pageLinks } from "./data";

const Pagelinks = () => {
  return (
    <>
        {pageLinks.map((link, index) => {
          return (
            <li key={index}>
              <a href={`#${link}`} className="footer-link">
                {link}
              </a>
            </li>
          );
        })}
      </>
  )
}
export default Pagelinks