import CardHeader from "./card_header/card_header";
import CardText from "./card_text/card_text";
import "./cards_text_container.css";

const CardsTextContainer = ({ title, description }) => {
  return (
    <div className="text_container_card">
      <CardHeader title={title} />
      <CardText description={description} />
    </div>
  );
};

export default CardsTextContainer;
