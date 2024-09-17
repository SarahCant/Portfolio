import { HashLink as Link } from "react-router-hash-link";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/#titlecard">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link smooth to="/#about">
            om mig
          </Link>
        </li>
        <li>/ /</li>
        <li>
          <Link smooth to="/#projects">
            projekter
          </Link>
        </li>
        <li>/ /</li>
        <li>
          <Link smooth to="/#contact">
            kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
