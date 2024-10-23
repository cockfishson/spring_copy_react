import React, { useState, useEffect } from "react";
import { CARDS_DEFAULT } from "../../data/card_content";

const SearchInput = ({ SetCardsData }) => {
  const [SearchParameters, SetSearchParameters] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const trimmedSearch = SearchParameters.trim()
        .toLowerCase()
        .replace(/[.,@/#!$%^&*;:{}=\-_`~()]/g, "");
      if (trimmedSearch.length > 1) {
        const result = CARDS_DEFAULT.filter((card_info) => {
          return (
            card_info.description.toLowerCase().includes(trimmedSearch) ||
            card_info.title.toLowerCase().includes(trimmedSearch)
          );
        });
        SetCardsData(result);
      } else {
        SetCardsData(CARDS_DEFAULT);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [SearchParameters, SetCardsData]);

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
