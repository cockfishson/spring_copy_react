import React, { useState, useEffect } from "react";
import { CARDS_DEFAULT } from "../../data/card_content";

const SearchInput = ({ SetCardsData }) => {
  const [SearchParameters, SetSearchParameters] = useState("");
  const SearchExecution = () => {
    SetSearchParameters(
      SearchParameters.trim()
        .toLowerCase()
        .replace(/[.,@/#!$%^&*;:{}=\-_`~()]/g, "")
    );
    if (SearchParameters.length > 1) {
      const result = CARDS_DEFAULT.filter((card_info) => {
        return (
          card_info.description.toLowerCase().includes(SearchParameters) ||
          card_info.title.toLowerCase().includes(SearchParameters)
        );
      });
      SetCardsData(result);
    } else SetCardsData(CARDS_DEFAULT);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      SearchExecution();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [SearchParameters]);

  return (
    <input
      className="search_bar"
      placeholder="Input search parameters"
      id="search_bar"
      onChange={(e) => SetSearchParameters(e.target.value)}
    />
  );
};

export default SearchInput;
