import React from "react";
import Cards from "./cards/cards";

const CardRow = ({ rowData }) => {
  return (
    <div class="card_row">
      {rowData.map((CardData) => (
        <Cards CardsData={CardData} />
      ))}
    </div>
  );
};

export default CardRow;
