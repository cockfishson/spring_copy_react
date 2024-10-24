import { useState, useEffect } from "react";
import CardRow from "./card_row";
import "../../style.css";

const CardContainer = ({ cardData }) => {
  const [PairedData, SetPairedData] = useState([]);

  useEffect(() => {
    if (Array.isArray(cardData)) {
      const pairedResult = cardData.reduce((result, value, index, array) => {
        if (index % 2 === 0) result.push(array.slice(index, index + 2));
        return result;
      }, []);
      SetPairedData(pairedResult);
    }
  }, [cardData]);

  return (
    <div className="card_container" id="card_container">
      {cardData.length > 0 ? (
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
