import React from "react";

const CardsImageContainer = ({ imgSrc }) => {
  return (
    <div class="img_container_card">
      <img src={imgSrc} class="card_image" alt={imgSrc} />
    </div>
  );
};

export default CardsImageContainer;
