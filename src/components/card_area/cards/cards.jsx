import CardsImageContainer from "./cards_image_container";
import CardsTextContainer from "./cards_text_container";
const Cards = ({ cardsData }) => {
  return (
    <div class="card">
      <CardsImageContainer imgSrc={cardsData.imgSrc} />
      <CardsTextContainer
        title={cardsData.title}
        description={cardsData.description}
      />
    </div>
  );
};

export default Cards;
