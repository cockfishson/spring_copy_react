import React from "react";
import CardHeader from "./card_header";
import CardText from "./card_text";

const CardsTextContainer = ({ title, description }) => {
  return (
    <div class="text_container_card">
      <CardHeader title={title} />
      <CardText description={description} />
    </div>
  );
};

export default CardsTextContainer;
