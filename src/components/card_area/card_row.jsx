import Cards from "./cards/cards";

const CardRow = ({ rowData }) => {
  return (
    <div class="card_row">
      {rowData.map((cardData) => (
        <Cards cardsData={cardData} />
      ))}
    </div>
  );
};

export default CardRow;
