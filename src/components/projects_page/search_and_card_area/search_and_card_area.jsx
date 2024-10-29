import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "./card_container/card_container";
import SearchArea from "./search_area/search_area";
import { searchCards } from "../../redux/actions/actions";
import { selectFilteredCards } from "../../redux/selectors/selectors";

const SearchAndCardArea = () => {
  const dispatch = useDispatch();
  const cardData = useSelector(selectFilteredCards);

  const handleSearch = (query) => {
    dispatch(searchCards(query));
  };

  return (
    <div>
      <SearchArea onSearch={handleSearch} debounceDelay={300} />
      <CardContainer cardData={cardData} />
    </div>
  );
};

export default SearchAndCardArea;
