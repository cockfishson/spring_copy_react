import { useState, useEffect } from "react";
import { CARDS_DEFAULT } from "../../data/card_content";

const SearchInput = ({ setCardsData }) => {
  const [searchParameters, setSearchParameters] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const trimmedSearch = searchParameters
        .trim()
        .toLowerCase()
        .replace(/[.,@/#!$%^&*;:{}=\-_`~()]/g, "");
      if (trimmedSearch.length > 1) {
        const result = CARDS_DEFAULT.filter((card_info) => {
          return (
            card_info.description.toLowerCase().includes(trimmedSearch) ||
            card_info.title.toLowerCase().includes(trimmedSearch)
          );
        });
        setCardsData(result);
      } else {
        setCardsData(CARDS_DEFAULT);
      }
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchParameters, setCardsData]);

  return (
    <input
      className="search_bar"
      placeholder="Input search parameters"
      onChange={(e) => setSearchParameters(e.target.value)}
    />
  );
};

export default SearchInput;
