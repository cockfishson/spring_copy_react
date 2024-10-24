import Cards from "./cards/cards";

const CardRow = ({ rowData }) => {
  return (
    <div class="card_row">
      {rowData.map((cardData) => (
        <Cards key={cardData.title} cardsData={cardData} />
      ))}
    </div>
  );
};

export default CardRow;
