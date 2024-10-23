import React, { useState, useEffect } from "react";
import CardRow from "./card_row";
import "../../style.css";

const CardContainer = ({ CardData }) => {
  console.log(CardData);
  const [PairedData, SetPairedData] = useState([]);
  const SplitIntoPairs = () => {
    SetPairedData(
      CardData.reduce((result, value, index, array) => {
        if (index % 2 === 0) result.push(array.slice(index, index + 2));
        return result;
      }, [])
    );
  };
  useEffect(() => {
    if (Array.isArray(CardData)) {
      SplitIntoPairs();
    }
  }, [CardData]);
  console.log(PairedData);
  return (
    <div className="card_container" id="card_container">
      {CardData.length > 0 ? (
        PairedData.map((cardPair, index) => (
          <CardRow key={index} rowData={cardPair} />
        ))
      ) : (
        <h1>Invalid input, no data found!</h1>
      )}
    </div>
  );
};

export default CardContainer;
