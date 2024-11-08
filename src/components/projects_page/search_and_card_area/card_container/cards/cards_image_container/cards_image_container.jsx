import "./cards_image_container.css";

const CardsImageContainer = ({ image }) => {
  return (
    <div className="img_container_card">
      <img className="card_image" src={image} />
    </div>
  );
};

export default CardsImageContainer;
