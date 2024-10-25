import CardContainer from "./card_container/card_container";
import SearchArea from "./search_area/search_area";
import { CARDS_DEFAULT } from "../../../data/card_content";
import { useState, useCallback } from "react";

const SearchAndCardArea = () => {
  const [cardData, setCardData] = useState(CARDS_DEFAULT);
  const handleSearch = useCallback((query) => {
    if (query.length > 1) {
      const result = CARDS_DEFAULT.filter(
        (card_info) =>
          card_info.description.trim().toLowerCase().includes(query) ||
          card_info.title.trim().toLowerCase().includes(query)
      );
      setCardData(result);
    } else {
      setCardData(CARDS_DEFAULT);
    }
  }, []);
  return (
    <div>
      <SearchArea onSearch={handleSearch} debounceDelay={300} />
      <CardContainer cardData={cardData} />
    </div>
  );
};

export default SearchAndCardArea;
