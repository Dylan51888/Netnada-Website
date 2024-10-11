import logo from "../images/logo.jpeg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* 渲染导航链接 */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        {/* 渲染 Contact Us 和 Request a Demo 链接 */}
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
