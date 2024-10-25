import SearchInput from "./search_input/search_input";
import "./search_area.css";

const SearchArea = ({ onSearch, debounceDelay }) => {
  return (
    <div className="search_container">
      <SearchInput onSearch={onSearch} debounceDelay={debounceDelay} />
    </div>
  );
};

export default SearchArea;
