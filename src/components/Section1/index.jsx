import { MailIcon } from "lucide-react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 22px;
  line-height: 27px;
  color: rgba(#202020, 0.5);
  margin-bottom: 24px;

  strong {
    font-family: "Elsie Swash Caps", cursive;
    font-size: 82px;
    line-height: 94px;
    color: #202020;
    font-weight: 900;

    @media only screen and (max-width: 768px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

const Section1 = () => {
  return (
    <section className="section-1">
      <div className="content">
        <Title>
          Sua casa com as <br />
          <strong>
            melhores <br />
            plantas
          </strong>
        </Title>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades
          da marca.
        </p>
        <form action="#">
          <div className="icon">
            <MailIcon size={16} />
          </div>
          <input type="email" required placeholder="Insira seu e-mail" />
          <button>Assinar newsletter</button>
        </form>
      </div>
    </section>
  );
};

export default Section1;
