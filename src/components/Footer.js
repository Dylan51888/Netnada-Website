import { footerLinks } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">copyright &copy; NetNada</p>
    </footer>
  );
};

export default Footer;
