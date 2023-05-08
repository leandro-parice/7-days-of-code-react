import plant1 from "../../assets/plant-1.png";

const Section2 = () => {
  return (
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
  );
};

export default Section2;
