import Newsletter from "../Newsletter";

const Section1 = () => {
  return (
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
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades
          da marca.
        </p>
        <Newsletter />
      </div>
    </section>
  );
};

export default Section1;
