import SearchInput from "./search_input/search_input";
import "./search_area.css";

const SearchArea = ({ setCardsData }) => {
  return (
    <div className="search_container">
      <SearchInput setCardsData={setCardsData} />
    </div>
  );
};

export default SearchArea;
