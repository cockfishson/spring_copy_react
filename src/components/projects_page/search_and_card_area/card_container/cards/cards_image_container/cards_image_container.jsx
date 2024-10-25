import "./cards_image_container.css";

const CardsImageContainer = ({ Icon }) => {
  return (
    <div className="img_container_card">
      {Icon && <Icon className="card_image" />}
    </div>
  );
};

export default CardsImageContainer;
