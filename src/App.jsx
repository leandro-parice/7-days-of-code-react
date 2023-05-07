import logo from "./assets/casa-verde-logo.svg";
import plant1 from "./assets/plant-1.png";
import plant2 from "./assets/plant-2.png";

import { MailIcon } from "lucide-react";

const App = () => {
  return (
    <div className="app">
      <header>
        <a href="#">
          <img src={logo} />
        </a>
        <nav>
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
      <section className="section-1">
        <div className="content">
          <h1>
            Sua casa com as <br />
            <strong>
              melhores <br />
              plantas
            </strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das
            novidades da marca.
          </p>
          <form action="#">
            <input type="text" placeholder="Insira seu e-mail" />
            <button>Assinar newsletter</button>
          </form>
        </div>
      </section>
      <section className="section-2">
        <div className="content">
          <div className="image">
            <img src={plant1} />
          </div>
          <div className="text">
            <h2>
              Como conseguir <br />
              <strong>minha planta</strong>
            </h2>
            <ul>
              <li>Escolha suas plantas</li>
              <li>Faça seu pedido</li>
              <li>Aguarde na sua casa</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-3">
        <h2>
          Conheça nossas <br />
          <strong>ofertas</strong>
        </h2>
        <div className="offers">
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
          <div className="offer">
            <div className="image">
              <img src={plant2} />
            </div>
            <div className="content">
              <div className="title">Ajuga reptans</div>
              <div className="price">R$ 20,00</div>
              <a href="#">Comprar</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
