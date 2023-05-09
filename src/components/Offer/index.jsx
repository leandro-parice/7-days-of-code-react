import styled from "styled-components";
import { ArrowRightIcon } from "lucide-react";

const Offer = ({ name, price, image }) => {
  const imgUrl = new URL(`../../assets/${image}.png`, import.meta.url).href;

  return (
    <div className="offer">
      <div className="image">
        <img src={imgUrl} />
      </div>
      <div className="content">
        <div className="title">{name}</div>
        <div className="price">R$ {price.toFixed(2)}</div>
        <a href="#">
          Comprar <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Offer;
