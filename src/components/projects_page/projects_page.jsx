import Header from "../header/header";
import MainArea from "../main_area/main_area";
import CardContainer from "../card_area/card_container";
import SearchArea from "../search_area/search_area";
import { CARDS_DEFAULT } from "../../data/card_content";
import { useState } from "react";
import "./style.css";

const ProjectsPage = () => {
  const [cardData, setCardData] = useState(CARDS_DEFAULT);
  const changeCardInfo = (NewCardData) => {
    setCardData(NewCardData);
  };
  return (
    <div>
      <Header />
      <MainArea />
      <SearchArea setCardsData={changeCardInfo} />
      <CardContainer cardData={cardData} />
    </div>
  );
};

export default ProjectsPage;
