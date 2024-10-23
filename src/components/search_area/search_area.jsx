import React from "react";
import SearchInput from "./search_input";

const SearchArea = ({ SetCardsData }) => {
  return (
    <div className="search_container">
      <SearchInput SetCardsData={SetCardsData} />
    </div>
  );
};

export default SearchArea;
