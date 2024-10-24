import SearchInput from "./search_input";

const SearchArea = ({ setCardsData }) => {
  return (
    <div className="search_container">
      <SearchInput setCardsData={setCardsData} />
    </div>
  );
};

export default SearchArea;
