import Header from "./header/header";
import MainArea from "./main_area/main_area";
import CardContainer from "./card_area/card_container";
import SearchArea from "./search_area/search_area";
import { CARDS_DEFAULT } from "../data/card_content";
import { useState } from "react";

const ProjectsPage = () => {
  const [CardData, SetCardData] = useState(CARDS_DEFAULT);
  const ChangeCardInfo = (NewCardData) => {
    SetCardData(NewCardData);
  };
  return (
    <div>
      <Header />
      <MainArea />
      <SearchArea SetCardsData={ChangeCardInfo} />
      <CardContainer CardData={CardData} />
    </div>
  );
};

export default ProjectsPage;
