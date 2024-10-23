import React from "react";
import CardsImageContainer from "./cards_image_container";
import CardsTextContainer from "./cards_text_container";
const Cards = ({ CardsData }) => {
  console.log(CardsData);
  return (
    <div class="card">
      <CardsImageContainer imgSrc={CardsData.imgSrc} />
      <CardsTextContainer
        title={CardsData.title}
        description={CardsData.description}
      />
    </div>
  );
};

export default Cards;
