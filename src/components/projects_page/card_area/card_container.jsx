import Cards from "./cards/cards";
import "./card_container.css";

const CardContainer = ({ cardData }) => {
  return (
    <div className="card_container">
      {cardData.length > 0 ? (
        cardData.map((card, index) => (
          <Cards key={card.title + index} cardsData={card} />
        ))
      ) : (
        <h1>Invalid input, no data found!</h1>
      )}
    </div>
  );
};

export default CardContainer;
