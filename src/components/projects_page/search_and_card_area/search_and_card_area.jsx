import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CardContainer from "./card_container/card_container";
import SearchArea from "./search_area/search_area";
import { searchCards } from "../../redux/card/card_actions";

const SearchAndCardArea = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.cardContent.cards);
  const handleSearch = useCallback(
    (query) => {
      dispatch(searchCards(query));
    },
    [dispatch]
  );

  return (
    <div>
      <SearchArea onSearch={handleSearch} debounceDelay={300} />
      <CardContainer cardData={cardData} />
    </div>
  );
};

export default SearchAndCardArea;
