import { MenuIcon } from "lucide-react";
import logo from "../../assets/casa-verde-logo.svg";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} />
      </a>
      <nav>
        <button>
          <MenuIcon />
        </button>
        <ul>
          <li>
            <a href="#">Como fazer</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Depoimentos</a>
          </li>
          <li>
            <a href="#">Vídeos</a>
          </li>
          <li>
            <a href="#">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
