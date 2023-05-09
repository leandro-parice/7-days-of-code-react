import { ArrowRightIcon } from "lucide-react";

import plant2 from "../../assets/plant-2.png";
import Offer from "../Offer";
import { useState } from "react";

const Section3 = () => {
  const [offers, setOffers] = useState([
    { id: 1, name: "Ajuga reptans", price: 20, image: "product-1" },
    { id: 2, name: "Cordyline fruticosa", price: 20, image: "product-2" },
    { id: 3, name: "Crassula ovata", price: 20, image: "product-3" },
    { id: 4, name: "Cyperus rotundus", price: 20, image: "product-4" },
    { id: 5, name: "Delairea odorata", price: 20, image: "product-5" },
    { id: 6, name: "Datura metel", price: 20, image: "product-6" },
  ]);

  return (
    <section className="section-3">
      <h2>
        Conheça nossas <br />
        <strong>ofertas</strong>
      </h2>
      <div className="offers">
        {offers.map((offer) => (
          <Offer key={offer.id} name={offer.name} price={offer.price} image={offer.image} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
