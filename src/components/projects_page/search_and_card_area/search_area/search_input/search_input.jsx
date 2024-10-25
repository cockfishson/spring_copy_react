import { useState, useEffect } from "react";
import "./search_input.css";

const SearchInput = ({ onSearch, debounceDelay }) => {
  const [searchParameters, setSearchParameters] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const trimmedSearch = searchParameters
        .toLowerCase()
        .replace(/[.,@/#!$%^&*;:{}=\-_`~()]/g, "");
      onSearch(trimmedSearch);
    }, debounceDelay);

    return () => clearTimeout(delayDebounceFn);
  }, [searchParameters, onSearch, debounceDelay]);

  const handleInputChange = (e) => {
    setSearchParameters(e.target.value);
  };

  return (
    <input
      className="search_bar"
      placeholder="Input search parameters"
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
